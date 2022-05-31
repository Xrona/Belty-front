<template>
  <div class="row">
    <div class="col-12 col-lg-3">
      <back-button />
      <catalog-menu class="hidden lg:block" />
    </div>
    <div class="col-12 col-lg-5">
      <product-gallery />
    </div>
    <div class="col-12 col-lg-4">
      <product-info :show-reviews="true" />
    </div>
  </div>
</template>

<script>
import ProductGallery from '~/components/product/product-gallery'
import ProductInfo from '~/components/product/product-info'
import CatalogMenu from '@/components/catalog/catalog-menu'
import BackButton from '@/components/common/back-button'
export default {
  name: 'ProductPage',
  components: { BackButton, CatalogMenu, ProductInfo, ProductGallery },
}
</script>

<style scoped></style>
