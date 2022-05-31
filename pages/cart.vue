<template>
  <div class="row">
    <div class="col-12 pb-1">
      <h2 class="text-h2 font-montserrat mb-1">Корзина</h2>
    </div>
    <div class="col-12 col-md-6 col-xl-8">
      <div class="row">
        <div class="col-12 col-lg-6">
          <cart-product />
        </div>
        <div class="col-12 col-lg-6">
          <cart-product />
        </div>
      </div>
    </div>
    <div class="cols-12 col-md-6 col-xl-4">
      <cart-sidebar />
    </div>
  </div>
</template>

<script>
import CartProduct from '@/components/cart/cart-product'
import CartSidebar from '@/components/cart/cart-sidebar'
export default {
  name: 'CartPage',

  components: { CartSidebar, CartProduct },
}
</script>
