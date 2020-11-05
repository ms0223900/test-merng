const { model, Schema } = require('mongoose')

const singleComment = {
  username: String,
  createdAt: String,
  content: String,
}

const singleLike = {
  username: String,
  createdAt: String,
}

const postSchema = new Schema({
  content: String,
  username: String,
  createdAt: String,
  comments: [
    singleComment
  ],
  likes: [
    singleLike,
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  }
})

module.exports = model('Post', postSchema)