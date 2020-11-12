<template>
  <ElCard>
      <div class="header-wrapper">
        <RouterLink :to="toPostLink">
          <div>
            <img
              :style="{ width: '60px', height: '60px' }"
              src="https://react.semantic-ui.com/images/avatar/large/molly.png"
            />
            <h3>{{ post.username }}</h3>
          </div>
        </RouterLink>
        <p>
          {{ post.createdAtTime }}
        </p>
        <div>{{ post.content }}</div>
      </div>
    <ElRow>
      <LikeButtonContainer :user="user" :post="post" />
      <CommentButton
        :postId="post.id"
        :commentCount="post.commentCount"
        :commentLink="toPostLink"
      />
      <DeleteButtonContainer v-if="isThisUser" :postId="post.id" />
    </ElRow>
  </ElCard>
</template>

<script>
import { singlePostProps } from '@/types';
import CommentButton from './Buttons/CommentButton.vue';

export default {
  name: 'PostCardItem',
  props: {
    post: singlePostProps,
    user: Object || null,
  },
  computed: {
    toPostLink() {
      return `/posts/${this.post.id}`;
    },
    isThisUser() {
      return !!(this.user && this.user.username === this.post.username);
    },
  },
  components: {
    CommentButton,
  },
};
</script>

<style>
</style>
