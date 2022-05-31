<template>
  <div class="row">
    <div class="col-12 pb-1">
      <h2>Корзина</h2>
    </div>
    <div class="col-12 col-md-6 col-xl-8">
      <div class="flex flex-wrap">
        <cart-product class="basis-1/2" />
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from '@/components/cart/cart-product'
export default {
  name: 'CartPage',
  components: { CartProduct },
}
</script>
