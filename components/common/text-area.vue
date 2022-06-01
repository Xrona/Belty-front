<template>
  <textarea class="text-area" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'TextArea',

  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>
