<template>
  <ElCard>
    <div>
      <h5>Post a comment</h5>
      <form>
        <div className="ui action input fluid">
          <input
            type="text"
            placeholder="Comment.."
            name="comment"
            :ref="commentInputRef"
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
          />
          <ElButton
            type="submit"
            :disabled="isCommentEmpty"
            @click="$emit('submit-comment')"
          >
            Submit
          </ElButton>
        </div>
      </form>
    </div>
  </ElCard>
</template>

<script>
export default {
  name: 'PostCommentForm',
  props: {
    commentInputRef: Object,
    modelValue: String,
  },
  emits: [
    'submit-comment',
  ],
};
</script>

<style>

</style>
