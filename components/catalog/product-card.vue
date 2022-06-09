<template>
  <div
    class="relative min-h-[360px] flex flex-col bg-white rounded-5 card-shadow cursor-pointer"
    @click.stop="goToProduct"
  >
    <div class="absolute flex items-center gap-1 top-2 left-2">
      <template v-if="product.discount">
        <div class="product-tag">- {{ product.discount }}</div>
      </template>
      <template v-if="product.bestseller">
        <div class="product-tag bg-blue-40">
          <svg-icon name="top" />
        </div>
      </template>
    </div>
    <img
      :src="product.image.url"
      alt="Product image"
      class="h-[225px] bg-blue-80 object-cover w-full rounded-t-5"
    />
    <div class="flex flex-col flex-grow px-2 pt-2 pb-4">
      <div class="flex flex-grow justify-between gap-1">
        <div>
          <h3 class="font-jura text-text text-black-60 font-normal">
            {{ product.name }}
          </h3>
          <span class="w-full text-xs-text text-black-60 font-light">
            {{ product.article }}
          </span>
        </div>
        <span
          class="flex flex-col items-end gap-1 font-jura text-text text-right flex-grow font-semibold text-black-60"
        >
          <span class="price">
            {{ product.price }}
          </span>
          <template v-if="product.discount">
            <span class="old-price price">
              {{ product.oldPrice }}
            </span>
          </template>
        </span>
      </div>
      <div class="pt-5 flex gap-2">
        <box-button text="Buy" class="flex-grow" />
        <box-button class="w-button with-icon">
          <template #icon>
            <svg-icon name="cart" width="20" height="20" />
          </template>
        </box-button>
      </div>
    </div>
  </div>
</template>

<script>
import BoxButton from '@/components/common/box-button'
export default {
  name: 'ProductCard',

  components: { BoxButton },

  props: {
    product: {
      type: Object,
      default: Object,
    },
  },

  methods: {
    goToProduct() {
      this.$router.push('/catalog/1')
    },
  },
}
</script>
