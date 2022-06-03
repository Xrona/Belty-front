<template>
  <button class="tag-button" @click="$emit('click')">
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
