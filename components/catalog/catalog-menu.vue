<template>
  <div class="mx-auto w-[255px] bg-white h-screen md:h-auto">
    <h2 class="mb-4 text-h2 text-black-60">Каталог</h2>
    <ul class="flex flex-col gap-2">
      <template v-for="(item, idx) in $options.menuList">
        <li
          :key="item"
          class="catalog-item"
          :class="{ active: idx === 1 }"
          @click="selectCategory"
        >
          {{ item }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CatalogMenu',

  methods: {
    selectCategory() {
      this.$emit('selectCategory')
    },
  },

  menuList: [
    'Классические ремни',
    'Ремни с автоматической пряжкой 40 мм',
    'Ремни с автоматической пряжкой 35 мм',
    'Широкие ремни 50 мм',
    'Женские ремни  30 и 35 мм',
    'Женские ремни 20 и 25 мм',
  ],
}
</script>
