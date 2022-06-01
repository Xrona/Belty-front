<template>
  <div class="row">
    <div class="col-12">
      <back-button />
      <h2 class="text-h2 font-montserrat mb-4 font-medium">
        Оформление заказа
      </h2>
    </div>
    <div class="col-12">
      <order-form />
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/common/back-button'
import OrderForm from '@/components/order/order-form'
export default {
  name: 'AddOrderPage',

  components: { OrderForm, BackButton },
}
</script>
