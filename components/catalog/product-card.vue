<template>
  <div class="min-h-[360px] bg-white rounded-5 card-shadow">
    <img
      src="https://images.unsplash.com/photo-1652067352562-9f983f9c9255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="Product image"
      class="h-[225px] bg-blue-80 object-cover w-full rounded-t-5"
    />
    <div class="px-2 pt-2 pb-4">
      <div class="flex justify-between flex-wrap gap-1">
        <h3 class="font-jura text-text text-black-60 font-normal">
          Name product
        </h3>
        <span class="font-jura text-text font-semibold text-black-60 price">
          48.50
        </span>
        <span class="w-full text-xs-text text-black-60 font-light">
          description
        </span>
      </div>
      <div class="pt-5 flex gap-2">
        <box-button text="Buy" class="flex-grow" />
        <box-button class="w-button">
          <template #icon>
            <svg-icon name="cart" width="20" height="20" />
          </template>
        </box-button>
      </div>
    </div>
  </div>
</template>

<script>
import BoxButton from '@/components/common/box-button'
export default {
  name: 'ProductCard',

  components: { BoxButton },
}
</script>
