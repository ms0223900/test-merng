import { DeleteButtonProps, LikeButtonProps, MenuBarProps } from "../../components/common/types";
import { Callback } from "../../types";
import { UseLikeButtonOptions } from "./functions/useLikeButton";

export interface DeleteButtonContainerProps extends Omit<DeleteButtonProps, 'isPopupOpen' | 'onConfirmDelete' | 'onOpenPopup'> {
  onDeleteCallback?: Callback
}

export interface LikeButtonContainerProps extends UseLikeButtonOptions {
  
}

export interface MenuBarContainerProps {
  
}