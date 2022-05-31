<template>
  <div class="cart-product card-shadow">
    <div class="flex flex-col gap-1">
      <div class="flex justify-between items-center">
        <box-button class="with-icon">
          <template #icon>
            <svg-icon name="trash" />
          </template>
        </box-button>
        <div class="flex gap-2 items-center">
          <box-button text="-" />
          <text-input class="w-button h-button" />
          <box-button text="+" />
        </div>
      </div>
      <product-gallery />
    </div>
    <h3>remen</h3>
    <p class="price text-blue-60">1000</p>
    <product-options />
    <box-button class="mt-2" text="Перейти к оформлению" />
  </div>
</template>

<script>
import BoxButton from '@/components/common/box-button'
import TextInput from '@/components/common/text-input'
import ProductGallery from '@/components/product/product-gallery'
import ProductOptions from '@/components/product/product-options'
export default {
  name: 'CartProduct',
  components: {
    ProductOptions,
    ProductGallery,
    TextInput,
    BoxButton,
  },
}
</script>
