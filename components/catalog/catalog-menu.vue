<template>
  <div class="mx-auto w-[255px] bg-white h-screen md:mx-0 md:h-auto">
    <h2 class="mb-4 text-h2 text-black-60">Каталог</h2>
    <ul class="flex flex-col gap-2">
      <li
        class="catalog-item"
        :class="{ active: currentCategory === null }"
        @click="selectCategoryHandler(null)"
      >
        Все
      </li>
      <template v-for="item of categories">
        <li
          :key="item.name"
          class="catalog-item"
          :class="{ active: item.id === currentCategory }"
          @click="selectCategoryHandler(item.id)"
        >
          {{ item.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CatalogMenu',

  computed: {
    ...mapGetters('category', ['categories']),
    ...mapGetters('product', ['currentCategory']),
  },

  methods: {
    ...mapMutations('product', ['selectCategory']),
    ...mapActions('product', ['getProducts']),

    async selectCategoryHandler(id) {
      this.selectCategory(id)
      await this.getProducts()
    },
  },
}
</script>
