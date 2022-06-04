<template>
  <div class="flex gap-2">
    <template v-for="color in colors">
      <div
        :key="`colorRadio-${color}`"
        class="w-8 h-8"
        @click="selectColorIdx = color.id"
      >
        <div
          class="w-full h-full rounded-2 cursor-pointer"
          :style="`background-color: ${color.name}`"
        ></div>
        <input
          type="radio"
          class="color-radio"
          :checked="selectColorIdx === color.id"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ColorRadio',

  props: {
    colors: {
      type: Array,
      default: Array,
    },
  },

  data() {
    return {
      selectColorIdx: null,
    }
  },
}
</script>
