<template>
  <div class="card-shadow rounded-5 bg-white">
    <img
      class="w-full aspect-square lg:aspect-auto lg:h-[225px] object-cover rounded-t-5"
      src="https://images.unsplash.com/photo-1653934006237-ecbe917d981a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    />
    <div class="flex flex-col gap-1 p-2 pb-4">
      <div
        class="flex flex-col lg:flex-row justify-between text-text font-jura"
      >
        <span>Ремень BeltY 40мм</span>
        <span class="price font-semibold">48.50</span>
      </div>
      <span class="text-xs-text font-jura font-light">Арт. RM-01450101</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderCard',
}
</script>
