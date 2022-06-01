<template>
  <div class="col-12 pb-1">
    <h2 class="text-h2 font-montserrat mb-1">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader',

  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
