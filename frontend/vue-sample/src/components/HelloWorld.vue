<template>
  <div class="hello">
    <PostCardItem v-bind="post" />
    <LoginedMenuBar :username="post.user.username" />
    <LogoutedMenuBar menuActiveItem="home" />
    <PostForm v-model="inputValue" @submitForm="handleSubmit" />
  </div>
</template>

<script lang="ts">
import PostCardItem from '@/components/common/PostCardItem.vue';
import LoginedMenuBar from '@/components/common/LoginedMenuBar.vue';
import LogoutedMenuBar from '@/components/common/LogoutedMenuBar.vue';
import { postCardItemProps } from '@/__mocks/common.mock';
import { defineComponent } from 'vue';
import useToggle from '@/lib/custom-hooks/useToggle';
import PostForm from './common/PostForm.vue';

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return ({
      inputValue: '',
    });
  },
  watch: {
    inputValue(val) {
      console.log(val);
    },
  },
  methods: {
    handleSubmit() {
      window.alert(this.inputValue);
    },
  },
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
    PostCardItem,
    LoginedMenuBar,
    LogoutedMenuBar,
    PostForm,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
