<template>
  <div class="wrapper" v-if="isOpen">
    <div class="popup">
      <slot />
    </div>
    <div class="bg" @click="$emit('close-popup')" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyPopupWrapper',
  props: {
    isOpen: Boolean,
  },
  emits: [
    'close-popup',
  ],
});
</script>

<style scoped>
  .wrapper {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    margin: auto;
    /* background-color: #ddd; */
  }
  .popup {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 300px;
    height: 200px;
    margin: auto;
    background-color: #fff;
    border-radius: 8px;
  }
  .bg {
    position: absolute;
    z-index: -1;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
    background-color: #111;
    opacity: 0.4;
  }
</style>
