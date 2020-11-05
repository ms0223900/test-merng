const postResolvers = require('./post')
const userResolvers = require('./user')
const commentResolvers = require('./comment')


const resolvers = {
  Post: {
    likeCount: ctx => ctx.likes.length,
    commentCount: ctx => ctx.comments.length,
  },
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...postResolvers.Mutation,
    ...userResolvers.Mutation,
    ...commentResolvers.Mutation,
  },
  Subscription: {
    ...postResolvers.Subscription,
  },
}

module.exports = resolvers