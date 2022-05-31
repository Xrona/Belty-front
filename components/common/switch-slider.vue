<template>
  <div
    class="switch-slider"
    :class="{ active: switchData }"
    @click.stop="switchHandler"
  >
    <button></button>
  </div>
</template>

<script>
export default {
  name: 'SwitchSlider',

  data() {
    return {
      switchData: false,
    }
  },

  methods: {
    switchHandler() {
      this.switchData = !this.switchData
    },
  },
}
</script>
