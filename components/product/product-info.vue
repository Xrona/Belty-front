<template>
  <div class="flex flex-col gap-10 md:gap-6">
    <div class="flex gap-3 flex-col">
      <div class="flex flex-col gap-1">
        <h3 class="text-h3 font-montserrat text-black-60">Rement</h3>
        <h3 class="text-h4 font-montserrat text-blue-40 price">100</h3>
      </div>
      <ul class="text-text font-semibold leading-8 font-jura text-black-60">
        <li>Артикул: <span class="font-normal">test</span></li>
        <li>Материал ремня: <span class="font-normal">test</span></li>
        <li>Срок изготовления: <span class="font-normal">test</span></li>
        <li>Гарантия: <span class="font-normal">test</span></li>
        <li>Страна изготовления: <span class="font-normal">test</span></li>
      </ul>
    </div>
    <div class="flex flex-col gap-6 md:gap-3">
      <h4 class="text-h4 font-montserrat text-black-60">
        Дополнительны характеристики
      </h4>
      <color-radio :colors="$options.colors" />
      <div class="flex justify-between items-center flex-wrap">
        <button class="link-button basis-full md:basis-auto">
          Как подорбрать?
        </button>
        <box-button
          class="outlined-button basis-full md:basis-auto"
          text="Сделать гравировку"
        />
      </div>
      <div class="flex justify-between items-center">
        <span class="text-text font-bold font-jura"
          >Упаковать как подарок*</span
        >
        <switch-slider />
      </div>
      <div class="flex justify-between gap-6 flex-wrap">
        <dropdown-list
          label="Размер"
          :list="['test1', 'test2', 'test3']"
          class="basis-full md:basis-auto md:flex-grow"
        />
        <dropdown-list
          label="Длина"
          :list="['test1', 'test2', 'test3']"
          class="basis-full md:basis-auto md:flex-grow"
        />
      </div>
    </div>
    <template v-if="showReviews">
      <div class="flex flex-col gap-3">
        <h4 class="text-h4 font-montserrat text-black-60">Отзывы</h4>
        <review-card />
      </div>
    </template>
  </div>
</template>

<script>
import ColorRadio from '~/components/product/color-radio'
import BoxButton from '@/components/common/box-button'
import SwitchSlider from '@/components/common/switch-slider'
import DropdownList from '@/components/common/dropdown-list'
import ReviewCard from '@/components/product/review-card'
export default {
  name: 'ProductInfo',
  components: { ReviewCard, DropdownList, SwitchSlider, BoxButton, ColorRadio },

  colors: ['#514108', '#232138', '#924108'],

  props: {
    showReviews: {
      type: Boolean,
    },
  },
}
</script>
