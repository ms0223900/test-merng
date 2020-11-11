<template>
  <div class="hello">
    <DeleteButton :isPopupOpen="toggle" @openPopup="setToggle" />
  </div>
</template>

<script lang="ts">
import DeleteButton from '@/components/common/DeleteButton.vue';
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
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
