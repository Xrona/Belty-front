<template>
  <text-input
    v-model="search"
    class="with-icon underline-input"
    icon="zoom"
    suffix-icon="close"
    @enter="searchHandler"
    @iconHandle="clearHandler"
  />
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import TextInput from '@/components/common/text-input'

export default {
  name: 'CatalogSearch',

  components: { TextInput },

  computed: {
    ...mapGetters('product', ['searchString']),

    search: {
      get() {
        return this.searchString
      },
      set(value) {
        this.setSearch(value)
      },
    },
  },

  methods: {
    ...mapMutations('product', ['setSearch']),
    ...mapActions('product', ['getProducts']),

    searchHandler() {
      this.getProducts()
    },

    clearHandler() {
      this.search = ''
      this.getProducts()
    },
  },
}
</script>
