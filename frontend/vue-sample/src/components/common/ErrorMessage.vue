<template>
  <div v-if="error">
    <span class="mes">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    error: Object || null || undefined,
    message: String,
  },
};
</script>

<style scoped>
  .mes {
    color: #F56C6C;
  }
</style>
