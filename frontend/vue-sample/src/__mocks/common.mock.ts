import { PostCardItemProps } from '@/components/common/types';
import { BasicData, SinglePost, User } from '@/types';

export const basicData: BasicData = {
  id: '',
  username: 'abc',
  createdAt: '2020/02/02',
};

export const user: User = {
  ...basicData,
  email: '',
  token: '',
};

export const post: SinglePost = {
  ...basicData,
  content: 'hi world!',
  likes: [],
  likeCount: 10,
  comments: [],
  commentCount: 2,
};

export const postCardItemProps: PostCardItemProps = {
  user,
  post,
};
