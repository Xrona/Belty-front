<template>
  <div class="bg-white pt-6 pb-3 footer-shadow">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 pb-5 lg:pb-2">
          <h4 class="text-h4 font-montserrat uppercase font-medium mb-2">
            Способы оплаты
          </h4>
        </div>
        <div class="col-12 col-md-6 col-lg-3 pb-5 lg:pb-2">
          <h4 class="text-h4 font-montserrat uppercase font-medium mb-2">
            Покупателям
          </h4>
          <div class="flex flex-col gap-1">
            <nuxt-link to="" class="link-button h-[29px]"
              >Как оформить заказ</nuxt-link
            >
            <nuxt-link to="" class="link-button h-[29px]">Доставка</nuxt-link>
            <nuxt-link to="" class="link-button h-[29px]"
              >Способ оплаты</nuxt-link
            >
            <nuxt-link to="" class="link-button h-[29px]"
              >Обмен и возврат товара</nuxt-link
            >
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 pb-5 lg:pb-2">
          <h4 class="text-h4 font-montserrat uppercase font-medium mb-2">
            Информация
          </h4>
          <div class="flex flex-col gap-1">
            <nuxt-link to="" class="link-button h-[29px]">Контакты</nuxt-link>
            <nuxt-link to="" class="link-button h-[29px]">Блог</nuxt-link>
            <nuxt-link to="" class="link-button h-[29px]">
              Информация для юр. лиц
            </nuxt-link>
            <nuxt-link to="" class="link-button h-[29px]">
              Политика конфиденциальности
            </nuxt-link>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 pb-5 lg:pb-2">
          <div class="flex flex-col gap-2">
            <p class="text-text font-jura">
              Физ. и юр. адрес 225301, Республика Беларусь, г. Кобрин, ул. 700
              лет Кобрина, д. 6, кв 21
            </p>
            <p class="text-text font-jura">
              Магазин <br />+375 (29) 827-94-83 Режим работы: Пн-Вс 09:00-21:00
            </p>
            <p class="text-text font-jura">
              E-mail <br />
              belty.by@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="py-5 text-text font-jura">
            ИП Борзученко О.Е. УНП 290138746, Свидетельство о государственной
            регистрации выдано Кобринским районным исполкомом от 25.09.2001.
            Зарегистрирован в Торговом реестре Республике Беларусь от 15.02.2021
            №502663.
          </p>
          <p class="text-text font-jura">© Belty.by, 2020</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>
