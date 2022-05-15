<template>
  <button class="tag-button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'TagButton',

  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
