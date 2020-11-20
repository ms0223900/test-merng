import DELETE_COMMENT_MUTATION from '@/gql/schemas/deleteComment.schema';
import DELETE_POST from '@/gql/schemas/deletePost.schema';
import QUERY_POSTS, { QueriedPosts } from '@/gql/schemas/queryPosts.schema';
import useToggle from '@/lib/custom-hooks/useToggle';
import { Callback, ID, MutationFn } from '@/types';
import { ApolloCache, DocumentNode } from '@apollo/client';

export interface UseDeleteButtonOptions {
  postId: ID;
  commentId?: ID;
  onMutate: MutationFn;
  onDeleteCallback?: Callback;
}

export const updatePostQuery = ({
  commentId, postId, onDeleteCallback, setOpen,
}: UseDeleteButtonOptions & { setOpen: Callback }) => (cache: ApolloCache<any>) => {
  setOpen(true);

  if (!commentId) {
    const cacheData = cache.readQuery<QueriedPosts>({
      query: QUERY_POSTS,
    });
    const newData = cacheData ? {
      getPosts: cacheData.getPosts.filter((p) => p.id !== postId),
    } : [];
    console.log(newData);
    cache.writeQuery({
      query: QUERY_POSTS, data: newData,
    });
  }

  if (onDeleteCallback) onDeleteCallback();
};

const useDeleteButton = (options: UseDeleteButtonOptions) => {
  const {
    commentId,
    onMutate,
  } = options;

  const {
    toggle: isOpen,
    setToggle: setOpen,
  } = useToggle(false);
  const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST;

  const handleOpen = (open: boolean) => () => setOpen(open);

  const updateFn = updatePostQuery({ ...options, setOpen });
  const handleDelete = () => {
    onMutate({
      mutation,
      update: updateFn,
    });
  };

  return ({
    isOpen,
    handleOpen,
    handleDelete,
  });
};

export default useDeleteButton;
