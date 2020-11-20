<template>
  <ElCard fluid>
    <div>
      <div>{{ post.username }}</div>
      <div>{{ createdTimeFromNow }}</div>
      <div>{{ post.content }}</div>
    </div>
    <hr />
    <div extra>
      <LikeButtonContainer v-bind="$props" />
      <ElTooltip effect="dark" content="Comment on post" placement="top">
        <ElButton basic color="blue">
          <i class="el-icon-s-comment" />
          {{ post.commentCount }}
        </ElButton>
      </ElTooltip>
      <DeleteButtonContainer
        v-if="isThisUser"
        :postId="post.postId"
        @delete="$emit('delete-post')"
      />
    </div>
  </ElCard>
</template>

<script>
import { singlePostProps, userProps } from '@/types';

export default {
  name: 'PostContent',
  props: {
    isThisUser: Boolean,
    user: userProps,
    post: singlePostProps,
  },
  emits: [
    'delete-post',
  ],
  computed: {
    createdTimeFromNow() {
      return this.$store.getters.createdTimeFromNow()(this.post.createdAt);
    },
  },
};
</script>

<style>

</style>
