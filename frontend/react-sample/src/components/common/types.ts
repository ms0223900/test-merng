import { ApolloError } from "@apollo/client";
import { User } from "../../constants/context";
import useForm from "../../lib/custom-hooks/useForm";
import { Callback, SinglePost } from "../../types";

export interface LoginedMenuBarProps {
  user: User
  onLogout: Callback
}

export type MenuActiveItemKeys = 'home' | 'login' | 'register'
export interface LogoutedMenuBarProps {
  menuActiveItem: MenuActiveItemKeys
  onClickMenuItem: (menuItem: MenuActiveItemKeys) => () => any
}

export interface MenuBarProps extends LoginedMenuBarProps, LogoutedMenuBarProps {
}

export interface DeleteButtonProps {
  commentId: string
  postId: string
  isPopupOpen: boolean
  onConfirmDelete: Callback
  onOpenPopup: (isOpen: boolean) => Callback
}

export interface LikeButtonProps {
  isLiked: boolean
  user: User
  post: SinglePost
  onLikePost: Callback
}

export interface PostCardItemProps {
  post: SinglePost
  user: User
}

export interface PostFormProps {
  inputValue: string
  onChange: ReturnType<typeof useForm>['onChange']
  onSubmit: ReturnType<typeof useForm>['onSubmit']
  error: ApolloError
}