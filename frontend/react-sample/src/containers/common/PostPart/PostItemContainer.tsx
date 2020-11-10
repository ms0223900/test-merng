import React from 'react';
import PostItem from '../../../components/common/PostPart/PostItem';
import usePostItem from './functions/usePostItem';

const PostItemContainer = () => {
  const postItemState = usePostItem();

  if(postItemState.loading) {
    return (
      <h3>{'Loading post...'}</h3>
    );
  }

  if(postItemState.post) {
    return (
      <PostItem 
        {...postItemState} 
        post={postItemState.post}
        onSubmit={postItemState.handleCreateComment} 
        onDeleteCallback={postItemState.onDeletePostCallback} 
      />
    );
  }

  return null;
};

export default PostItemContainer;