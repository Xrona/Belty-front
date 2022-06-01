<template>
  <profile-body name="Корзина">
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
  name: 'CartPage',
  components: { CartProduct, ProfileBody },
}
</script>
