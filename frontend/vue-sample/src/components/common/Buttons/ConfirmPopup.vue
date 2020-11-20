<template>
  <MyPopupWrapper
    :isOpen="isOpen"
    @closePopup="$emit('close-popup')"
  >
    <div class="wrapper">
      <div class="content">
        <slot />
      </div>
      <div class="button-part">
        <ElButton @click="$emit('close-popup')">
          Cancel
        </ElButton>
        <ElButton type="primary" @click="$emit('confirm')">
          Confirm
        </ElButton>
      </div>
    </div>
  </MyPopupWrapper>
</template>

<script>
import MyPopupWrapper from '../wrappers/MyPopupWrapper.vue';

export default {
  name: 'ConfirmPopup',
  props: {
    isOpen: Boolean,
  },
  emits: [
    'close-popup',
    'confirm',
  ],
  components: {
    MyPopupWrapper,
  },
};
</script>
<style scoped>
  .wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .content {
    padding: 8px 0px;
  }
  .button-part {
    padding: 8px 0px;
  }
</style>
