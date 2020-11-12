<template>
  <div class="hello">
    <DeleteButton :isPopupOpen="toggle" @openPopup="setToggle" />
    <LikeButton :user="null" :post="{}" :isLiked="true" />
    <PostCardItem v-bind="post" />
  </div>
</template>

<script lang="ts">
import DeleteButton from '@/components/common/DeleteButton.vue';
import LikeButton from '@/components/common/LikeButton.vue';
import PostCardItem from '@/components/common/PostCardItem.vue';
import { postCardItemProps } from '@/__mocks/common.mock';
import { defineComponent } from 'vue';
import useToggle from '@/lib/custom-hooks/useToggle';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const { toggle, handleToggle, setToggle } = useToggle();

    return ({
      toggle,
      setToggle,
      handleToggle,
      post: postCardItemProps,
    });
  },
  computed: {
    toggleButtonTxt(): string {
      return this.toggle ? '關閉' : '開啟';
    },
  },
  props: {
    msg: String,
  },
  components: {
    DeleteButton,
    LikeButton,
    PostCardItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
