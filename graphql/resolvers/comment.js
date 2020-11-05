const { AuthenticationError, UserInputError } = require('apollo-server')

const checkAuth = require('../../lib/checkAuth.js')
const makeCreatedAt = require('../../lib/makeCreatedAt.js')
const Post = require('../../models/Post.js')

const createComment = async (_, { postId, content, }, ctx) => {
  const { username } = checkAuth(ctx)
  const post = await Post.findById(postId)

  const isEmptyContent = content.trim() === ''
  if(isEmptyContent) {
    throw new UserInputError('Empty comment!', {
      errors: {
        body: 'Comment content must not be empty!'
      }
    })
  }

  if(post) {
    const newComment = {
      username,
      content,
      createdAt: makeCreatedAt()
    }

    post.comments.unshift(newComment)
    await post.save()
    return post
  } else {
    throw new UserInputError('Post not found :(')
  }
}

const deleteComment = async (_, { postId, commentId, }, ctx) => {
  const { username } = checkAuth(ctx)
  const post = await Post.findById(postId)

  if(post) {
    const commentIndex = post.comments.findIndex(c => c.id === commentId)
    const isSameUser = post.comments[commentIndex].username === username
    
    if(isSameUser) {
      post.comments.splice(commentIndex, 1)
      await post.save()
      return post
    } else {
      throw new AuthenticationError('Delete action not allowed!')
    }
  } else {
    throw new UserInputError('Post not found :(')
  }
}

const resolvers = {
  Mutation: {
    createComment,
    deleteComment,
  },
}

module.exports = resolvers