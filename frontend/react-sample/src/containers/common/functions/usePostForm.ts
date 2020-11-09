import { ApolloCache, useMutation } from "@apollo/client";
import CREATE_POST from "../../../graphql/schemas/createPost.schema";
import QUERY_POSTS, { QueriedPosts } from "../../../graphql/schemas/queryPosts.schema";
import useForm from "../../../lib/custom-hooks/useForm";

export interface UsePostFormOptions {
  
}

export const updatePost = ({
  onChange,
}: ReturnType<typeof useForm>) => (cache: ApolloCache<any>, result: any) => {
  const data = cache.readQuery<QueriedPosts>({
    query: QUERY_POSTS,
  });
  const newData = data ? {
    getPosts: [result.data.createPost, ...data.getPosts]
  } : data;

  cache.writeQuery({ query: QUERY_POSTS, data: newData });
  onChange({ target: { name: 'content', value: ''}} as any);
};

const usePostForm = () => {
  const formState = useForm({
    initFormState: {
      content: '',
    },
    onSubmitCallback: handleCreatePost,
  }) as any;
  
  const {
    values, onChange, onSubmit,
  } = formState;

  const [createPost, { error, }] = useMutation(CREATE_POST, {
    variables: values,
    update: updatePost(formState)
  });

  function handleCreatePost() {
    return createPost();
  }

  return ({
    error,
    values,
    onChange,
    onSubmit,
    handleCreatePost,
  });
};

export default usePostForm;