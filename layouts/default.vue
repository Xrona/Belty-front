<template>
  <div class="wrapper">
    <common-header />
    <div class="main-container">
      <Nuxt />
    </div>
    <div>footer</div>
  </div>
</template>

<script>
import CommonHeader from '~/components/common/header'

export default {
  name: 'DefaultLayout',

  components: {
    CommonHeader,
  },
}
</script>
