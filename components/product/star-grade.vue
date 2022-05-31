<template>
  <div class="p-1 flex flex-row-reverse gap-[2px] w-full">
    <template v-for="star in 5">
      <button
        :key="`starGrade${star}`"
        class="start-grade-button"
        @click="selectStar(star)"
      >
        <svg-icon name="star" width="18px" height="16px" />
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'StarGrade',

  methods: {
    selectStar(idx) {
      console.log(6 - idx)
    },
  },
}
</script>
