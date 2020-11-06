import React from 'react';
import { Button, Confirm, Icon } from 'semantic-ui-react';
import MyPopupWrapper from './MyPopupWrapper';
import { DeleteButtonProps } from './types';

const DeleteButton = ({
  commentId,
  isPopupOpen,
  onConfirmDelete,
  onOpenPopup,
}: DeleteButtonProps) => {
  const popupContent = 
    commentId ? 'Delete comment' : 'Delete post';
  
  return (
    <>
      <MyPopupWrapper content={popupContent}>
        <Button
          as="div"
          color="red"
          floated="right"
          onClick={onOpenPopup(true)}
        >
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
      </MyPopupWrapper>
      <Confirm
        open={isPopupOpen}
        onCancel={onOpenPopup(false)}
        onConfirm={onConfirmDelete}
      />
    </>
  );
};

export default DeleteButton;