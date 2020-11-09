import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { User } from "../../../constants/context";
import LIKE_POST from "../../../graphql/schemas/likePost.schema";
import useToggle from "../../../lib/custom-hooks/useToggle";
import { ID, SingleLike, SinglePost } from "../../../types";

export interface UseLikeButtonOptions {
  user: User
  post: SinglePost
}

const useLikeButton = ({
  user,
  post: { id: postId, likes: likeList, }, 
}: UseLikeButtonOptions) => {
  const {
    toggle: isLiked,
    setToggle: setLiked,
  } = useToggle(false);

  const [handleLikePost] = useMutation(LIKE_POST, {
    variables: { postId, }
  });

  useEffect(() => {
    if (user && likeList.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likeList]);

  return ({
    isLiked,
    setLiked,
    handleLikePost,
  });
};

export default useLikeButton;