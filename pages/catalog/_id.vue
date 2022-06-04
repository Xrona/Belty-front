<template>
  <div class="row">
    <div class="col-12 col-lg-3">
      <back-button />
      <catalog-menu class="hidden lg:block" />
    </div>
    <div class="col-12 col-lg-5">
      <product-gallery :gallery="gallery" />
    </div>
    <div class="col-12 col-lg-4">
      <product-info :show-reviews="true" :content="product" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductGallery from '~/components/product/product-gallery'
import ProductInfo from '~/components/product/product-info'
import CatalogMenu from '@/components/catalog/catalog-menu'
import BackButton from '@/components/common/back-button'
export default {
  name: 'ProductPage',

  components: { BackButton, CatalogMenu, ProductInfo, ProductGallery },

  async fetch() {
    await this.getCategories()
    const id = this.$route?.params?.id
    await this.getProduct(id)
  },

  computed: {
    ...mapGetters('product', ['product']),

    gallery() {
      return this.product?.images ?? []
    },
  },

  methods: {
    ...mapActions('category', ['getCategories']),
    ...mapActions('product', ['getProduct']),
  },
}
</script>
