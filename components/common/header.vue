<template>
  <div class="flex h-[88px] ml-[39px] pt-3 justify-between">
    <div>
      <h1>Belty</h1>
      <button></button>
    </div>
    <ul class="menu-links">
      <li>
        <nuxt-link to="/">Каталог</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">Акции</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">О нас</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">Оформление заказа</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">Оплата и доставка</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">Блог</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">Контакты</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">Вход</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">Регистрация</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
}
</script>
