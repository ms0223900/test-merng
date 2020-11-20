import CREATE_COMMENT from '@/gql/schemas/createComment.schema';
import useForm from '@/lib/custom-hooks/useForm';
import { MutationFn } from '@/types';
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export interface UsePostItemOptions {
  onMutate: MutationFn;
}

const usePostItem = ({
  onMutate,
}: UsePostItemOptions) => {
  const { params: { postId } } = useRoute();
  const router = useRouter();
  const {
    state: { user },
  } = useStore();
  const commentInputRef = ref<HTMLInputElement | null>(null);

  const {
    formValues,
    onChange,
    handleSetValue,
  } = useForm({
    initFormState: {
      comment: '',
    },
  });

  const commentValue = formValues.comment;
  const variables = {
    postId,
    content: commentValue,
  };
  const handleCreateComment = () => {
    onMutate({
      mutation: CREATE_COMMENT,
      update() {
        handleSetValue('comment')('');
        if (commentInputRef.value) {
          commentInputRef.value.blur();
        }
      },
      variables,
    });
  };

  const onDeletePostCallback = () => {
    window.alert('Delete success!');
    router.push('/');
  };

  return ({
    user,
    formValues,
    handleCreateComment,
    onDeletePostCallback,
    onChange,
  });
};

export default usePostItem;
