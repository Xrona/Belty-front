<template>
  <div class="flex flex-col gap-10 md:gap-6">
    <div class="flex gap-3 flex-col">
      <div class="flex flex-col gap-1">
        <h3 class="text-h3 font-montserrat text-black-60">
          {{ name }}
        </h3>
        <h3 class="text-h4 font-montserrat text-blue-40 price">
          {{ price }}
        </h3>
      </div>
      <ul class="text-text font-semibold leading-8 font-jura text-black-60">
        <li>
          Артикул: <span class="font-normal">{{ article }}</span>
        </li>
        <li>
          Материал ремня:
          <span class="font-normal">{{ material }}</span>
        </li>
        <li>Срок изготовления: <span class="font-normal"></span></li>
        <li>
          Гарантия: <span class="font-normal">{{ guarantee }}</span>
        </li>
        <li>
          Страна изготовления:
          <span class="font-normal">{{ country }}</span>
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-6 md:gap-3">
      <h4 class="text-h4 font-montserrat text-black-60">
        Дополнительны характеристики
      </h4>
      <product-options :colors="colors" :sizes="sizes" />
    </div>
    <template v-if="showReviews">
      <div class="flex flex-col gap-3">
        <h4 class="text-h4 font-montserrat text-black-60">Отзывы</h4>
        <review-card />
      </div>
    </template>
  </div>
</template>

<script>
import ReviewCard from '@/components/product/review-card'
import ProductOptions from '@/components/product/product-options'
export default {
  name: 'ProductInfo',
  components: {
    ProductOptions,
    ReviewCard,
  },

  props: {
    showReviews: {
      type: Boolean,
    },
    content: {
      type: Object,
      default: Object,
    },
  },

  computed: {
    name() {
      return this.content?.name ?? ''
    },
    price() {
      return this.content?.price ?? ''
    },
    article() {
      return this.content?.article ?? ''
    },
    material() {
      return this.content?.material ?? ''
    },
    guarantee() {
      return this.content?.guarantee ?? ''
    },
    country() {
      return this.content?.country ?? ''
    },
    sizes() {
      return this.content?.sizes ?? []
    },
    colors() {
      return this.content?.colors ?? []
    },
  },
}
</script>
