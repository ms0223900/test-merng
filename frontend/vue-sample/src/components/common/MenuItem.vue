<template>
  <div
    :class="{ menuActive: getActive, menuItem: true, }"
    @click="$emit('click-menu-item', name)"
  >
    <RouterLink :to="linkTo">
      <slot />
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    name: String,
    linkTo: String,
    menuActiveItem: String,
  },
  emits: [
    'click-menu-item',
  ],
  computed: {
    getActive() {
      return this.menuActiveItem === this.name;
    },
  },
};
</script>

<style>
  .menuItem {
    padding: 0px 4px;
  }
  .menuActive {
    border-bottom: 2px solid #111;
  }
</style>
