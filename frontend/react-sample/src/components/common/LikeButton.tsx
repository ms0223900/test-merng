import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { LikeButtonProps } from './types';
import MyPopupWrapper from './MyPopupWrapper';

const LikeButton = ({
  isLiked, 
  post: { likeCount, },
  user, 
  onLikePost,
}: LikeButtonProps) => {
  const likeButton = user ? (
    isLiked ? (
      <Button color="teal">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="teal" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="teal" basic>
      <Icon name="heart" />
    </Button>
  );

  const popupContent = isLiked ? 'Unlike' : 'Like';
  return (
    <Button as="div" labelPosition="right" onClick={onLikePost}>
      <MyPopupWrapper content={popupContent}>{likeButton}</MyPopupWrapper>
      <Label basic color="teal" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
};

export default LikeButton;