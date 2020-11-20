import { PostFormProps } from '@/components/common/types';
import CREATE_POST from '@/gql/schemas/createPost.schema';
import QUERY_POSTS, { QueriedPosts } from '@/gql/schemas/queryPosts.schema';
import useForm, { UseFormResult } from '@/lib/custom-hooks/useForm';
import { MutationFn } from '@/types';
import { ApolloCache } from '@apollo/client';
import { updatePostQuery } from './useDeleteButton';

export interface UsePostFormOptions {
  onMutate: MutationFn;
}

export const updatePost = ({
  onChange,
}: { onChange: UseFormResult<any>['onChange'] }) => (cache: ApolloCache<any>, result: any) => {
  const data = cache.readQuery<QueriedPosts>({
    query: QUERY_POSTS,
  });
  const newData = data ? {
    getPosts: [result.data.createPost, ...data.getPosts],
  } : data;

  cache.writeQuery({ query: QUERY_POSTS, data: newData });

  const changeEvent = { target: { name: 'content', value: '' } } as any;
  onChange(changeEvent);
};

const usePostForm = ({
  onMutate,
}: UsePostFormOptions) => {
  const formState = useForm({
    initFormState: {
      content: '',
    },
  });

  const {
    formValues, onChange,
  } = formState;

  const handleSubmit = () => {
    onMutate({
      mutation: CREATE_POST,
      variables: formValues,
      update: updatePost(formState),
    });
  };

  return ({
    handleSubmit,
    onChange,
    formValues,
  });
};

export default usePostForm;
