<template>
  <text-input v-model="search" class="with-icon underline-input" icon="zoom" />
</template>

<script>
import TextInput from '@/components/common/text-input'

export default {
  name: 'CatalogSearch',

  components: { TextInput },

  data() {
    return {
      search: '',
    }
  },
}
</script>
