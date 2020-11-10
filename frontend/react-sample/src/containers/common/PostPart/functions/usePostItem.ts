import { useMutation, useQuery } from "@apollo/client";
import { useCallback, useContext, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../../../constants/context";
import CREATE_COMMENT from "../../../../graphql/schemas/createComment.schema";
import QUERY_SINGLE_POST, { QueriedSinglePost } from "../../../../graphql/schemas/querySinglePost.schema";
import useForm from "../../../../lib/custom-hooks/useForm";

const usePostItem = () => {
  const { postId } = useParams<{ postId: string }>();
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const commentInputRef = useRef<HTMLInputElement>(null);

  const {
    values,
    onChange,
    handleSetValue,
  } = useForm({
    initFormState: {
      comment: '',
    }
  });
  const commentValue = values.comment;

  const { data, loading, error, } = useQuery<QueriedSinglePost>(QUERY_SINGLE_POST, {
    variables: {
      postId,
    }
  });
  const post = data ? data.getPost : undefined;

  const [handleCreateComment] = useMutation(CREATE_COMMENT, {
    update() {
      handleSetValue('comment')('');
      if(commentInputRef.current) {
        commentInputRef.current.blur();
      }
    },
    variables: {
      postId,
      content: commentValue,
    }
  });

  const onDeletePostCallback = useCallback(() => {
    history.push('/');
  }, [history]);

  return ({
    loading,
    error,
    user,
    post,
    commentInputRef,
    commentValue,
    handleCreateComment,
    onDeletePostCallback,
    onChange,
  });
};

export default usePostItem;