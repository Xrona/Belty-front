<template>
  <div class="flex justify-between items-center">
    <div>
      <span class="text-text text-gray-20 font-jura">Сортировать по:</span>
      <div class="flex gap-3 mt-2">
        <template v-for="sort in $options.sortingEnum">
          <button
            :key="sort.name"
            class="text-blue-40 font-jura text-text font-semibold"
          >
            {{ sort.label }}
          </button>
        </template>
      </div>
    </div>
    <box-button class="w-[42px] justify-center px-0">
      <template #icon>
        <svg-icon name="close" />
      </template>
    </box-button>
  </div>
</template>

<script>
import SortingEnum from '@/enums/sorting-enum'
import BoxButton from '@/components/common/box-button'

export default {
  name: 'CatalogSorting',

  components: { BoxButton },

  sortingEnum: SortingEnum.list(),
}
</script>
