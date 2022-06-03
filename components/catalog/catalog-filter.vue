<template>
  <div>
    <span class="text-text text-gray-20 font-jura">Фильтровать по:</span>
    <div class="flex gap-3 mt-2">
      <template v-for="filter in filterList">
        <tag-button
          :key="filter.label"
          :text="filter.label"
          :class="{ active: filter.value }"
          @click="setFilter(filter.name)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import TagButton from '@/components/common/tag-button'
import FilterEnum from '@/enums/filter-enum'
export default {
  name: 'CatalogFilter',

  components: { TagButton },

  computed: {
    ...mapGetters('product', ['onlyBestseller', 'onlyDiscount']),

    filterList() {
      return [
        {
          label: FilterEnum.Discount.label,
          name: FilterEnum.Discount.name,
          value: this.onlyDiscount,
        },
        {
          label: FilterEnum.Popular.label,
          name: FilterEnum.Popular.name,
          value: this.onlyBestseller,
        },
      ]
    },
  },

  methods: {
    ...mapMutations('product', ['setOnlyBestseller', 'setOnlyDiscount']),
    ...mapActions('product', ['getProducts']),

    setFilter(name) {
      if (name === FilterEnum.Discount.name) {
        this.setOnlyDiscount(!this.onlyDiscount)
      } else {
        this.setOnlyBestseller(!this.onlyBestseller)
      }

      this.getProducts()
    },
  },
}
</script>
