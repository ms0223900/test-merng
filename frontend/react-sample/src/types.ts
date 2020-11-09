export type ID = string | number

export type Callback = (params?: any) => any

export interface BasicData {
  id: ID
  username: string
  createdAt: string
}

export interface SingleLike extends BasicData {
}

export interface SingleComment extends BasicData {
  content: string
}

export interface SinglePost extends BasicData {
  content: string
  likes: SingleLike[]
  likeCount: number
  comments: SingleComment[]
  commentCount: number
}