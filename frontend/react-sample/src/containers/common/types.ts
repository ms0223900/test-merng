import { DeleteButtonProps } from "../../components/common/types";

export interface DeleteButtonContainerProps extends Omit<DeleteButtonProps, 'isPopupOpen' | 'onConfirmDelete' | 'onOpenPopup'> {
  
}