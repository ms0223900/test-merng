<template>
  <div fluid key={comment.id}>
    <div>
      <DeleteButtonContainer
        v-if="isThisUserComment"
        :postId="postId"
        :commentId="comment.id"
      />
      <div>{{ comment.username }}</div>
      <div>{{ moment(comment.createdAt).fromNow() }}</div>
      <div>{{ comment.content }}</div>
    </div>
  </div>
</template>

<script>
import { singleCommentProps } from '@/types';

export default {
  name: 'CommentItem',
  props: {
    isThisUserComment: Boolean,
    postId: Number || String,
    comment: singleCommentProps,
  },
};
</script>

<style>

</style>
