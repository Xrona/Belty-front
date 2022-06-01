<template>
  <div class="row order-form">
    <div class="col-12 col-lg-6">
      <div class="row">
        <div class="col-12 lg:hidden pb-6">
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6"
          >
            <order-card class="basis-1/2" />
            <order-card class="basis-1/2" />
            <order-card class="basis-1/2" />
          </div>
        </div>
        <div class="col-12">
          <text-input placeholder="Имя" />
        </div>
        <div class="col-12">
          <text-input placeholder="Фамилия" />
        </div>
        <div class="col-12">
          <text-input placeholder="Телефон" />
        </div>
        <div class="col-12">
          <text-input placeholder="Email" />
        </div>
        <div class="col-12">
          <text-input placeholder="Город, насленный пункт" />
        </div>
        <div class="col-12 col-lg-7">
          <text-input placeholder="Улица" />
        </div>
        <div class="col-12 col-lg-2">
          <text-input placeholder="Дом" />
        </div>
        <div class="col-12 col-lg-3">
          <text-input placeholder="Квартира" />
        </div>
        <div class="col-12">
          <text-area placeholder="Комментарии" />
        </div>
        <div class="col-12">
          <div class="flex flex-col gap-3">
            <h3 class="text-h3 font-montserrat font-medium">Способы оплаты</h3>
            <radio-buttons
              name="payment"
              :options="[
                { name: 'option1', active: false },
                { name: 'option2', active: true },
              ]"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="flex flex-col gap-2 mt-6">
            <p class="text-text font-jura font-bold">
              Товары на сумму: <span class="price text-blue-60">2343432</span>
            </p>
            <p class="text-text font-jura font-bold">
              Скидка: <span class="price text-blue-60">2343432</span>
            </p>
            <p class="text-text font-jura font-bold">
              Доставка: <span class="price text-blue-60">2343432</span>
            </p>
            <hr class="border-t-1 border-blue-40 mt-2 mb-3" />
            <p class="text-text font-jura font-bold">
              Итого: <span class="price text-blue-60">2343432</span>
            </p>
            <div
              class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_210px] lg:grid-cols-[minmax(0,1fr)_160px] gap-6 mt-10 mb-5"
            >
              <div class="text-text font-jura">
                Нажимая на кнопку «Отправить заказ», вы принимаете условия
                <nuxt-link class="underline" to="/">Публичной оферты</nuxt-link>
              </div>
              <box-button class="px-0" text="Оформить заказ" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 hidden lg:block">
      <div class="grid grid-cols-2 gap-6">
        <order-card />
        <order-card />
        <order-card />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/common/text-input'
import OrderCard from '@/components/order/order-card'
import RadioButtons from '@/components/common/radio-buttons'
import TextArea from '@/components/common/text-area'
import BoxButton from '@/components/common/box-button'
export default {
  name: 'OrderForm',

  components: { BoxButton, TextArea, RadioButtons, OrderCard, TextInput },
}
</script>
