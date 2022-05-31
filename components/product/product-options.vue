<template>
  <div class="flex flex-col gap-6 md:gap-3">
    <color-radio :colors="$options.colors" />
    <div class="flex justify-between items-center flex-wrap gap-3">
      <button class="link-button basis-full md:basis-auto">
        Как подорбрать?
      </button>
      <text-input class="basis-full md:basis-1/2" placeholder="Гравировка..." />
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
  </div>
</template>

<script>
import ColorRadio from '@/components/product/color-radio'
import SwitchSlider from '@/components/common/switch-slider'
import DropdownList from '@/components/common/dropdown-list'
import TextInput from '@/components/common/text-input'
export default {
  name: 'ProductOptions',

  components: { TextInput, DropdownList, SwitchSlider, ColorRadio },

  colors: ['#514108', '#232138', '#924108'],
}
</script>
