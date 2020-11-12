/* eslint-disable import/no-extraneous-dependencies */
import { ApolloError } from '@apollo/client';
import {
  Callback, ID, SinglePost, User,
} from '../../types';

export interface LoginedMenuBarProps {
  user: User;
  onLogout: Callback;
}

export type MenuActiveItemKeys = 'home' | 'login' | 'register'
export interface LogoutedMenuBarProps {
  menuActiveItem: MenuActiveItemKeys;
  onClickMenuItem: (menuItem: MenuActiveItemKeys) => () => any;
}

export interface MenuBarProps extends Omit<LoginedMenuBarProps, 'user'>, LogoutedMenuBarProps {
  user: User | null;
}

export interface DeleteButtonProps {
  commentId?: ID;
  postId: ID;
  isPopupOpen: boolean;
  onConfirmDelete: Callback;
  onOpenPopup: (isOpen: boolean) => Callback;
}

export interface LikeButtonProps {
  isLiked: boolean;
  user: User | null;
  post: SinglePost;
  onLikePost: Callback;
}

export interface PostCardItemProps {
  post: SinglePost;
  user: User | null;
}

export interface PostFormProps {
  inputValue: string;
  error: ApolloError | undefined;
}
