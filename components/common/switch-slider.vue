<template>
  <div class="switch-slider" :class="{ active: switchData }">
    <button @click="switchHandler"></button>
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
