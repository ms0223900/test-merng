import { ApolloCache, useMutation } from "@apollo/client";
import DELETE_COMMENT_MUTATION from "../../../graphql/schemas/deleteComment.schema";
import DELETE_POST from "../../../graphql/schemas/deletePost.schema";
import QUERY_POSTS, { QueriedPosts } from "../../../graphql/schemas/queryPosts.schema";
import useToggle from "../../../lib/custom-hooks/useToggle";
import { Callback, ID } from "../../../types";

export interface UseDeleteButtonOptions {
  postId: ID
  commentId?: ID
  onDeleteCallback?: Callback
}

export const updatePostQuery = ({
  commentId, postId, onDeleteCallback, setOpen
}: UseDeleteButtonOptions & { setOpen: Callback, }) => (cache: ApolloCache<any>) => {
  setOpen(true);
      
  if(!commentId) {
    const cacheData = cache.readQuery<QueriedPosts>({
      query: QUERY_POSTS,
    });
    const newData = cacheData ? {
      getPosts: cacheData.getPosts.filter(p => p.id !== postId),
    } : [];
    console.log(newData);
    cache.writeQuery({
      query: QUERY_POSTS, data: newData,
    });
  }

  onDeleteCallback && onDeleteCallback();
};

const useDeleteButton = (options: UseDeleteButtonOptions) => {
  const {
    postId, commentId,
  } = options;

  const {
    toggle: isOpen,
    setToggle: setOpen
  } = useToggle(false);

  const mutationGql = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST;

  const [handleDelete] = useMutation(mutationGql, {
    update: updatePostQuery({ ...options, setOpen, }),
    variables: {
      postId,
      commentId,
    }
  });

  const handleOpen = (open: boolean) => () => setOpen(open);

  return ({
    isOpen,
    handleOpen,
    handleDelete
  });
};

export default useDeleteButton;