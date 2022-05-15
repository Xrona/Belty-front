<template>
  <div class="row">
    <div class="col-12 flex items-center justify-between relative py-4">
      <button
        v-click-outside="hideMenu"
        class="burger-button"
        :class="{ active: menu }"
        @click="toggleMenu"
      >
        <span></span>
      </button>
      <transition name="slide">
        <template v-if="menu">
          <div
            class="absolute z-10 w-full p-3 bg-white flex flex-col gap-2 top-10 base-shadow rounded-2"
          >
            <template v-for="item in $options.menuList">
              <nuxt-link :key="item.name" class="menu-item" :to="item.link">
                {{ item.name }}
              </nuxt-link>
            </template>
          </div>
        </template>
      </transition>
      <div class="flex gap-4">
        <nuxt-link to="/" class="text-h1 text-black-60">Belty</nuxt-link>
        <button class="bg-blue-60 text-white h-9 w-9 rounded-2">
          <svg-icon name="logo-cart" width="28" height="27" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: 'MainHeader',

  directives: {
    ClickOutside,
  },

  data() {
    return {
      menu: false,
    }
  },

  methods: {
    toggleMenu() {
      this.menu = !this.menu
    },

    hideMenu() {
      this.menu = false
    },
  },

  menuList: [
    {
      name: 'Каталог',
      link: '/',
    },
    {
      name: 'Акции',
      link: '/',
    },
    {
      name: 'О нас',
      link: '/',
    },
    {
      name: 'Оформление заказа',
      link: '/',
    },
    {
      name: 'Оплата и доставка',
      link: '/',
    },
    {
      name: 'Блог',
      link: '/',
    },
    {
      name: 'Контакты',
      link: '/',
    },
  ],
}
</script>
