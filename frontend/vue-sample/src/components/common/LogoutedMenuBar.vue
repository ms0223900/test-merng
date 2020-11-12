<template>
  <ElRow class="menu-wrapper" type="flex" justify="space-between" align="middle">
    <ElCol :span="1">
      <MenuItem
        v-bind="$props"
        name="home"
        linkTo="/"
        @clickMenuItem="$emit('click-menu-item')"
      >
        Home
      </MenuItem>
    </ElCol>
    <ElCol :span="2">
      <div :style="{ display: 'flex', }">
        <MenuItem
          v-bind="$props"
          name="login"
          linkTo="/login"
          @clickMenuItem="$emit('click-menu-item')"
        >
          Login
        </MenuItem>
        <MenuItem
          v-bind="$props"
          name="register"
          linkTo="/register"
          @clickMenuItem="$emit('click-menu-item')"
        >
          Register
        </MenuItem>
      </div>
    </ElCol>
  </ElRow>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  name: 'LogoutedMenuBar',
  props: {
    menuActiveItem: String,
  },
  emits: [
    'click-menu-item',
  ],
  components: {
    MenuItem,
  },
};
</script>

<style scoped>
  .menu-wrapper {
    background-color: #ddd;
    padding: 8px 4px;
  }
</style>
