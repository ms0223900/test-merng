import LIKE_POST from '@/gql/schemas/likePost.schema';
import useToggle from '@/lib/custom-hooks/useToggle';
import { MutationFn, SinglePost, User } from '@/types';
import { watch, watchEffect } from 'vue';

export interface UseLikeButtonOptions {
  user: User | null;
  post: SinglePost;
  onMutate: MutationFn;
}

const useLikeButton = ({
  user,
  post: { id: postId, likes: likeList },
  onMutate,
}: UseLikeButtonOptions) => {
  const {
    toggle: isLiked,
    setToggle: setLiked,
  } = useToggle(false);
  const mutation = LIKE_POST;
  const variables = { postId };

  const handleLikePost = () => {
    onMutate({
      mutation,
      variables,
    });
  };

  watch([user, likeList, setLiked], () => {
    const isThisUserLike = user && likeList.find((like) => like.username === user.username);
    if (isThisUserLike) {
      setLiked(true);
    } else setLiked(false);
  });

  return ({
    isLiked,
    setLiked,
    handleLikePost,
  });
};

export default useLikeButton;
