<template>
  <div>
    <form>
      <h2>Create a post:</h2>
      <div>
        <input
          placeholder="Hi World!"
          name="content"
          :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
        />
        <ErrorMessage :error="error" />
        <ElButton type="primary" color="teal" @click="$emit('submit-form')">
          Submit
        </ElButton>
      </div>
    </form>
    <ErrorMessage />
  </div>
</template>

<script>
import ErrorMessage from './ErrorMessage.vue';

export default {
  name: 'PostForm',
  props: {
    modelValue: String,
    error: Object,
  },
  computed: {
    errorMessage() {
      return this.error.graphQLErrors[0].message;
    },
  },
  emits: [
    'submit-form',
  ],
  components: { ErrorMessage },
};
</script>

<style>

</style>
