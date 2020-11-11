import { Callback, SinglePost, User } from '@/types';

export interface LikeButtonProps {
  isLiked: boolean;
  user: User | null;
  post: SinglePost;
  onLikePost: Callback;
}
