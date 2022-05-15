<template>
  <div class="container">
    <main-header />
    <Nuxt />
  </div>
</template>

<script>
import MainHeader from '~/components/common/main-header'
export default {
  name: 'DefaultLayout',

  components: { MainHeader },
}
</script>
