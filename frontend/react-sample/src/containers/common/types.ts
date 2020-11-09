import { DeleteButtonProps, LikeButtonProps, MenuBarProps } from "../../components/common/types";

export interface DeleteButtonContainerProps extends Omit<DeleteButtonProps, 'isPopupOpen' | 'onConfirmDelete' | 'onOpenPopup'> {
  
}

export interface LikeButtonContainerProps extends Omit<LikeButtonProps, 'isLiked' | 'onLikePost'> {
  
}

export interface MenuBarContainerProps {
  
}