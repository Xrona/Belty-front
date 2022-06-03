<template>
  <button class="box-button" @click="$emit('click')">
    <slot name="icon" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BoxButton',

  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
