<template>
  <div>
    <ElToolTip effect="dark" :content="toolTipContent">
      <ElButton icon="el-icon-delete" @click="$emit('open-popup', true)" />
    </ElToolTip>
    <ConfirmPopup
      :isOpen="isPopupOpen"
      @closePopup="$emit('open-popup', false)"
      @confirm="$emit('confirm-delete')"
    >
      {{ confirmTitle }}
    </ConfirmPopup>
  </div>
</template>

<script>
import ConfirmPopup from './ConfirmPopup.vue';

export default {
  name: 'DeleteButton',
  props: {
    commentId: String,
    postId: String,
    isPopupOpen: Boolean,
  },
  emits: [
    'confirm-delete',
    'open-popup',
  ],
  data() {
    return ({
      confirmTitle: 'Are you sure delete?',
    });
  },
  computed: {
    toolTipContent() {
      return this.commentId ? 'Delete comment' : 'Delete post';
    },
  },
  components: {
    ConfirmPopup,
  },
};
</script>

<style>

</style>
