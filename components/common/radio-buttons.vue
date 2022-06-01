<template>
  <div class="flex flex-col gap-1">
    <template v-for="button in options">
      <div :key="button.name" class="radio-button" @click="selectOption">
        <div class="radio-button__box">
          <input type="radio" :name="name" :checked="button.active" />
          <div>
            <svg-icon name="arrow" width="20" height="20" />
          </div>
        </div>
        <span>{{ button.name }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'RadioButtons',

  props: {
    name: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      default: Array,
    },
  },
}
</script>
