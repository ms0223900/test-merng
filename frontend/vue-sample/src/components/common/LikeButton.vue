<template>
  <ElTooltip effect="dark" :content="toolTipContent" placement="right">
    <ElButton @click="handleLikePost">
        <i v-if="user && isLiked" class="el-icon-star-on" />
        <i v-else class="el-icon-star-off" />
      {{ post.likeCount || 0 }}
    </ElButton>
  </ElTooltip>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'LikeButton',
  setup() {
    const {
      push,
    } = useRouter();

    return ({ push });
  },
  props: {
    isLiked: Boolean,
    user: Object || null,
    post: Object,
  },
  computed: {
    toolTipContent() {
      return (this.isLiked && this.user) ? 'Unlike' : 'Like';
    },
  },
  emits: [
    'like-post',
  ],
  methods: {
    handleLikePost() {
      if (this.user) {
        this.$emit('like-post');
      } else {
        this.handleDirectToLogin();
      }
    },
    handleDirectToLogin() {
      this.push('/login');
    },
  },
};
</script>

<style>

</style>
