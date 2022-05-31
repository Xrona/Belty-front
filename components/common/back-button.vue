<template>
  <box-button class="with-icon w-8 h-8 mb-4" @click="$emit('click')">
    <template #icon>
      <svg-icon name="back-arrow" />
    </template>
  </box-button>
</template>

<script>
import BoxButton from '@/components/common/box-button'
export default {
  name: 'BackButton',

  components: { BoxButton },
}
</script>
