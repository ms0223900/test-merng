<template>
  <ElRow class="menu-wrapper" type="flex" justify="space-between" align="middle">
    <ElCol :span="1">
      <RouterLink to="/">
        {{ username }}
      </RouterLink>
    </ElCol>
    <ElCol :span="2">
      <ElButton @click="$emit('log-out')">
        Logout
      </ElButton>
    </ElCol>
  </ElRow>
</template>

<script>
export default {
  name: 'LoginedMenuBar',
  props: {
    username: String,
  },
  emits: [
    'log-out',
  ],
};
</script>

<style scoped>
  .menu-wrapper {
    background-color: #ddd;
    padding: 8px 4px;
  }
</style>
