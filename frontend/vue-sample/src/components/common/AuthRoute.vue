<template>
  <RouterView v-if="!!user" />
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'AuthRoute',
  setup() {
    const {
      state,
    } = useStore();

    const { shouldCheckUser } = this.$router.currentRoute.value.meta;
    return ({
      shouldCheckUser,
      user: state.user,
    });
  },
  mounted() {
    if (!this.user && this.shouldCheckUser) {
      this.$router.push('/');
    }
  },
};
</script>

<style>

</style>
