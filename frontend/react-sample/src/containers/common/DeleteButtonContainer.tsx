import React from 'react';
import DeleteButton from '../../components/common/DeleteButton';
import useDeleteButton from './functions/useDeleteButton';
import { DeleteButtonContainerProps } from './types';

const DeleteButtonContainer = (props: DeleteButtonContainerProps) => {
  const {
    isOpen,
    handleDelete,
    handleOpen,
  } = useDeleteButton(props);

  return (
    <DeleteButton 
      {...props}
      isPopupOpen={isOpen}
      onConfirmDelete={handleDelete}
      onOpenPopup={handleOpen}
    />
  );
};

export default DeleteButtonContainer;