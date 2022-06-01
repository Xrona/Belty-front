<template>
  <profile-body name="История заказов">
    <template #card="{ className }">
      <div :class="className">
        <cart-product />
      </div>
    </template>
  </profile-body>
</template>

<script>
import ProfileBody from '@/components/profile/profile-body'
import CartProduct from '@/components/profile/cart-product'
export default {
  name: 'HistoryOrderPage',
  components: { CartProduct, ProfileBody },
}
</script>
