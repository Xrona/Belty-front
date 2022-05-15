<template>
  <div>
    <span class="text-text text-gray-20 font-jura">Фильтровать по:</span>
    <div class="flex gap-3 mt-2">
      <template v-for="filter in $options.filterEnum">
        <tag-button :key="filter.name" :text="filter.label" />
      </template>
    </div>
  </div>
</template>

<script>
import TagButton from '@/components/common/tag-button'
import FilterEnum from '@/enums/filter-enum'
export default {
  name: 'CatalogFilter',

  components: { TagButton },

  filterEnum: FilterEnum.list(),
}
</script>
