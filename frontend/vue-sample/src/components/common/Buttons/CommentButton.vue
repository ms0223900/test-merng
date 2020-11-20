<template>
  <ElTooltip effect="dark" content="Comment on post" placement="right">
    <RouterLink :to="commentLink">
      <ElButton>
        <i class="el-icon-s-comment" />
        {{ commentCount }}
      </ElButton>
    </RouterLink>
  </ElTooltip>
</template>

<script>
export default {
  name: 'CommentButton',
  props: {
    postId: String || Number,
    commentCount: Number,
    commentLink: String,
  },
};
</script>

<style>

</style>
