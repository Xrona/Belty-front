<template>
  <button class="box-button">
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
