const { AuthenticationError, UserInputError } = require('apollo-server')

const checkAuth = require('../../lib/checkAuth.js')
const makeCreatedAt = require('../../lib/makeCreatedAt.js')
const Post = require('../../models/Post.js')

const getPosts = async() => {
  try {
    const posts = await Post.find().sort({ createdAt: -1, })
    return posts
  } catch(e) {
    throw new Error(e)
  }
}

const getPost = async(_, { postId, }) => {
  try {
    const post = await Post.findById(postId);

    if (post) {
      return post;
    } else {
      throw new Error('Post not found');
    }
  } catch(e) {
    throw new Error(e)
  }
}

const createPost = async(_, { content, }, ctx) => {
  const user = checkAuth(ctx)
  const isEmptyContent = content.trim() === ''

  if(isEmptyContent) {
    throw new Error('Post content must not be empty!')
  }

  const newPost = new Post({
    content,
    user: user.id,
    username: user.username,
    createdAt: makeCreatedAt(),
  })

  const post = await newPost.save()
  ctx.pubsub.publish('NEW_POST', {
    newPost: post,
  })

  return post
}

const deletePost = async(_, { postId, }, ctx) => {
  const user = checkAuth(ctx)

  try {
    const post = await Post.findById(postId)
    const isSameUser = post.username === user.username
    
    if(isSameUser) {
      await post.delete()
      return 'Post deleted successfully!'
    } else {
      throw new AuthenticationError('Action not allowed')
    }
  } catch(e) {
    throw new Error(e)
  }
}

const likePost = async(_, { postId, }, ctx) => {
  const { username } = checkAuth(ctx)
  const post = await Post.findById(postId)
  
  if(post) {
    //toggle like
    const isThisPostLiked = post.likes.find(l => l.username === username)
    
    if(isThisPostLiked) {
      const filteredLikes = post.likes.filter(l => l.username !== username)
      post.likes = filteredLikes
    } 
    else {
      const newLike = {
        username,
        createdAt: makeCreatedAt(),
      }
      post.likes = [...post.likes, newLike]
    }

    await post.save()
    return post
  } else {
    throw new UserInputError('Post not found:(')
  }
}

const newPost = {
  subscribe: (_, __, { pubsub, }) => (
    pubsub.asyncIterator('NEW_POST')
  )
}

const resolvers = {
  Query: {
    getPosts,
    getPost,
  },
  Mutation: {
    createPost,
    deletePost,
    likePost,
  },
  Subscription: {
    newPost,
  },
}

module.exports = resolvers