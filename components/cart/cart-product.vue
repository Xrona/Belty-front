<template>
  <div class="cart-product">
    <div class="flex flex-col gap-1">
      <div class="flex justify-between items-center">
        <box-button class="with-icon">
          <template #icon>
            <svg-icon name="trash" />
          </template>
        </box-button>
        <div class="flex gap-2 items-center">
          <box-button text="-" />
          <text-input class="w-button h-button" />
          <box-button text="+" />
        </div>
      </div>
      <product-gallery />
    </div>
    <h3>remen</h3>
    <p class="price">1000</p>
    <color-radio :colors="['red', 'green']" />
    <div class="flex justify-between items-center flex-wrap">
      <button class="link-button basis-full md:basis-auto">
        Как подобрать?
      </button>
      <box-button
        class="outlined-button basis-full md:basis-auto"
        text="Сделать гравировку"
      />
    </div>
    <div class="flex justify-between items-center">
      <span class="text-text font-bold font-jura">Упаковать как подарок*</span>
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
    <box-button class="mt-2" text="Перейти к оформлению" />
  </div>
</template>

<script>
import BoxButton from '@/components/common/box-button'
import TextInput from '@/components/common/text-input'
import ProductGallery from '@/components/product/product-gallery'
import ColorRadio from '@/components/product/color-radio'
import SwitchSlider from '@/components/common/switch-slider'
import DropdownList from '@/components/common/dropdown-list'
export default {
  name: 'CartProduct',
  components: {
    DropdownList,
    SwitchSlider,
    ColorRadio,
    ProductGallery,
    TextInput,
    BoxButton,
  },
}
</script>
