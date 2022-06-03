<template>
  <div class="flex justify-between items-center">
    <div>
      <span class="text-text text-gray-20 font-jura">Сортировать по:</span>
      <div class="flex gap-3 mt-2">
        <template v-for="sortItem of sortList">
          <div :key="sortItem.label">
            <button
              class="text-blue-40 font-jura text-text font-semibold"
              @click="setSort(sortItem.name)"
            >
              {{ sortItem.label }}
            </button>
            <template v-if="sortItem.value !== null">
              <svg-icon
                name="arrow-up"
                :class="{
                  'svg-down': sortItem.value === $options.sortCaseEnum.DESC,
                }"
              />
            </template>
          </div>
        </template>
      </div>
    </div>
    <box-button class="w-[42px] justify-center px-0" @click="clearSort">
      <template #icon>
        <svg-icon name="close" />
      </template>
    </box-button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import SortingEnum from '@/enums/sorting-enum'
import BoxButton from '@/components/common/box-button'
import SortCaseEnum from '@/enums/sort-case-enum'

export default {
  name: 'CatalogSorting',

  components: { BoxButton },

  computed: {
    ...mapGetters('product', ['sortingByDate', 'sortingByPrice']),

    sortList() {
      return [
        {
          label: SortingEnum.Updated.label,
          name: SortingEnum.Updated.name,
          value: this.sortingByDate ?? null,
        },
        {
          label: SortingEnum.Price.label,
          name: SortingEnum.Price.name,
          value: this.sortingByPrice ?? null,
        },
      ]
    },
  },

  methods: {
    ...mapMutations('product', [
      'setSortingByDate',
      'setSortingByPrice',
      'clearSorting',
    ]),

    ...mapActions('product', ['getProducts']),

    setSort(name) {
      if (name === SortingEnum.Updated.name) {
        this.setSortingByDate()
      } else {
        this.setSortingByPrice()
      }

      this.getProducts()
    },

    clearSort() {
      this.clearSorting()
      this.getProducts()
    },
  },

  sortCaseEnum: SortCaseEnum,
}
</script>
