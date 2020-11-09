import React from 'react';
import LikeButton from '../../components/common/LikeButton';
import useLikeButton from './functions/useLikeButton';
import { LikeButtonContainerProps } from './types';

const LikeButtonContainer = (props: LikeButtonContainerProps) => {
  const {
    isLiked,
    handleLikePost,
  } = useLikeButton(props);

  return (
    <LikeButton 
      {...props}
      isLiked={isLiked}
      onLikePost={handleLikePost}
    />
  );
};

export default LikeButtonContainer;