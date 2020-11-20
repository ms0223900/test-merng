<template>
  <div>
    <ElRow>
      <ElCol :xs="2">
        <img
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          class="avatar"
        />
      </ElCol>
      <ElCol :xs="10">
        <PostContent v-bind="$props" :isThisUser="isThisUser" @deleteCallback="$emit('delete')" />
        <PostCommentForm v-bind="$props" />
        <CommentItem
          v-for="(comment, i) in comments"
          :key="i"
          :isThisUserComment="!!(user && user.username === c.username)"
          :postId="postId"
          :comment="comment"
        />
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {

  },
  emits: [
    'delete',
  ],
};
</script>

<style scoped>
  .avatar {
    width: 36px;
    height: 36px;
  }
</style>
