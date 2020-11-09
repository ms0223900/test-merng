import React from 'react';
import PostForm from '../../components/common/PostForm';
import usePostForm from './functions/usePostForm';

const PostFormContainer = () => {
  const {
    error,
    values,
    onChange,
    onSubmit,
  } = usePostForm();

  return (
    <PostForm 
      inputValue={values.content}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default PostFormContainer;