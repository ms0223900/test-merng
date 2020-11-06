export type Callback = (params?: any) => any

export interface BasicData {
  id: string
}

export interface SingleLike extends BasicData {
}

export interface SinglePost extends BasicData {
  content: string
  createdAt: string
  username: string
  likeCount: number
  commentCount: number
  likes: SingleLike[]
}