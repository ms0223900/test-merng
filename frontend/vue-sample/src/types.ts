import { DocumentNode } from 'graphql';

export type ID = string | number

export type Callback = (...params: any) => any
export type MutationFn = (options: {
  mutation: DocumentNode;
  update?: Callback;
  variables?: any;
}) => any

export interface BasicData {
  id: ID;
  username: string;
  createdAt: string;
}
export const basicDataProps = {
  id: String || Number,
  username: String,
  createdAt: String,
};

export interface User extends BasicData {
  email: string;
  token: string;
}
export const userProps = {
  ...basicDataProps,
  email: String,
  token: String,
};

export type SingleLike = BasicData
export const singleLikeProps = {
  ...basicDataProps,
};

export interface SingleComment extends BasicData {
  content: string;
}
export const singleCommentProps = {
  ...basicDataProps,
  content: String,
};

export interface SinglePost extends BasicData {
  content: string;
  likes: SingleLike[];
  likeCount: number;
  comments: SingleComment[];
  commentCount: number;
}
export const singlePostProps = {
  ...basicDataProps,
  content: String,
  likes: Array(singleLikeProps),
  likeCount: Number,
  comments: Array(singleCommentProps),
  commentCount: Number,
};
