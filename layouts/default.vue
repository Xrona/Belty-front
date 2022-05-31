<template>
  <div>
    <div class="container pb-10">
      <main-header />
      <Nuxt />
    </div>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '~/components/common/main-header'
import MainFooter from '@/components/common/main-footer'
export default {
  name: 'DefaultLayout',

  components: { MainFooter, MainHeader },
}
</script>
