<template>
  <div class="text-input">
    <input v-model="content" :type="type" :placeholder="placeholder" />
    <template v-if="icon">
      <span>
        <svg-icon :name="icon" :width="iconWidth" :height="iconHeight" />
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TextInput',

  model: {
    event: 'change',
    prop: 'value',
  },

  props: {
    placeholder: {
      type: [String, null],
      default: '',
    },

    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    icon: {
      type: String,
      default: '',
    },
    iconWidth: {
      type: String,
      default: '24px',
    },
    iconHeight: {
      type: String,
      default: '24px',
    },
  },

  computed: {
    content: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('change', value)
      },
    },
  },
}
</script>
