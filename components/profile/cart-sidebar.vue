<template>
  <div class="flex flex-col gap-6">
    <div class="flex justify-between">
      <div>
        <h3
          class="relative text-h3 font-montserrat font-medium mb-2 after:absolute after:bg-blue-40 after:h-[1px] after:w-full after:bottom-0 after:left-0"
          style="--tw-content: ''"
        >
          Привет, Иван
        </h3>
        <div class="flex flex-col gap-1">
          <nuxt-link
            to="/profile/cart"
            class="link-button h-[29px] rounded-2 active-link"
            >Корзина</nuxt-link
          >
          <nuxt-link
            to="/profile/order/active"
            class="link-button h-[29px] rounded-2"
            >Активные заказы</nuxt-link
          >
          <nuxt-link
            to="/profile/order/history"
            class="link-button h-[29px] rounded-2"
            >История заказов</nuxt-link
          >
          <nuxt-link
            to="/profile/comment"
            class="link-button h-[29px] rounded-2"
            >Комментарии</nuxt-link
          >
        </div>
      </div>
      <profile-avatar />
    </div>
    <template v-if="showFullPrice">
      <div>
        <p class="mb-1 text-text font-jura font-bold">
          Стоимость товаров <span class="text-blue-60 price">322323</span>
        </p>
        <box-button text="Оформить заказ" class="w-[160px]" />
      </div>
    </template>
  </div>
</template>

<script>
import ProfileAvatar from '@/components/common/profile-avatar'
import BoxButton from '@/components/common/box-button'
export default {
  name: 'CartSidebar',

  components: { BoxButton, ProfileAvatar },

  computed: {
    showFullPrice() {
      return this.$route.path?.includes('cart') ?? false
    },
  },
}
</script>
