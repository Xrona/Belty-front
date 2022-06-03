<template>
  <div class="row">
    <div class="col-12 col-md-3" :class="{ 'hidden md:block': category }">
      <catalog-menu @selectCategory="selectCategory" />
    </div>
    <div class="col-12 col-md-9" :class="{ 'hidden md:block': !category }">
      <div class="flex flex-col gap-4">
        <catalog-search />
        <catalog-sorting />
        <catalog-filter />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <template v-for="product of products">
            <product-card :key="product.name" :product="product" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCard from '@/components/catalog/product-card'
import CatalogSearch from '@/components/catalog/catalog-search'
import CatalogSorting from '@/components/catalog/catalog-sorting'
import CatalogFilter from '@/components/catalog/catalog-filter'
import CatalogMenu from '@/components/catalog/catalog-menu'
export default {
  name: 'IndexPage',

  components: {
    CatalogMenu,
    CatalogFilter,
    CatalogSorting,
    CatalogSearch,
    ProductCard,
  },

  data() {
    return {
      category: false,
    }
  },

  async fetch() {
    await this.getCategories()
    await this.getProducts()
  },

  computed: {
    ...mapGetters('product', ['products']),
  },

  methods: {
    ...mapActions('product', ['getProducts']),
    ...mapActions('category', ['getCategories']),

    selectCategory() {
      this.category = true
    },
  },
}
</script>
