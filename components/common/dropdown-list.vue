<template>
  <div class="dropdown-list">
    <span v-if="label" class="dropdown-list__label">{{ label }}</span>
    <button @click="listShow = !listShow">
      <span>{{ option ? option : label }}</span>
      <svg-icon
        name="arrow"
        :class="{ 'svg-down': listShow }"
        width="20px"
        height="20px"
      />
    </button>
    <transition name="slide">
      <template v-if="listShow">
        <ul>
          <template v-for="item of list">
            <li :key="item">
              <button @click="selectOption(item)">{{ item }}</button>
            </li>
          </template>
        </ul>
      </template>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DropdownList',

  props: {
    label: {
      type: [String, null],
      default: null,
    },

    list: {
      type: Array,
      default: Array,
    },
  },

  data() {
    return {
      listShow: false,
      option: '',
    }
  },

  methods: {
    selectOption(value) {
      this.option = value
      this.listShow = false
    },
  },
}
</script>
