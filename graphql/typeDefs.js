const { gql } = require("apollo-server");

const queryDefs = `
  type User {
    id: ID!
    createdAt: String!
    username: String!
    email: String!
    token: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    content: String!
  }

  type Post {
    id: ID!
    createdAt: String!
    username: String!
    content: String!
    comments: [Comment]!
    commentCount: Int!
    likes: [Like]!
    likeCount: Int!
  }

  type Query {
    getPosts: [Post]!
    getPost(postId: ID!): Post
  }
`

const mutationDefs = `
  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(content: String!): Post!
    deletePost(postId: String!): String!
    createComment(postId: String!, content: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`

const subscriptionDefs = `
  type Subscription {
    newPost: Post!
  }
`

const typeDefs = gql`
  ${queryDefs}
  ${mutationDefs}
  ${subscriptionDefs}
`

module.exports = typeDefs