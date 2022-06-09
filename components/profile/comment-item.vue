<template>
  <div class="flex gap-2">
    <img
      class="object-cover w-16 h-14 rounded-2"
      src="https://images.unsplash.com/photo-1654805128419-11eacb0d1d2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt=""
    />
    <div class="flex flex-col gap-2 basis-0 flex-grow self-start">
      <div>
        <h4 class="text-h4 mb-1 font-montserrat text-black-60">Remen</h4>
        <div class="flex gap-1 items-center">
          <star-grade class="basis-0" />
          <span class="text-sm-text text-gray-40 font-jura pt-1"
            >25 мая 2021</span
          >
        </div>
      </div>
      <p class="text-text font-jura text-gray-40">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
        reiciendis.
      </p>
      <div class="flex gap-1 items-center">
        <img
          class="w-12 h-12 rounded-2 object-cover"
          src="https://images.unsplash.com/photo-1654805128419-11eacb0d1d2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <img
          class="w-12 h-12 rounded-2 object-cover"
          src="https://images.unsplash.com/photo-1654805128419-11eacb0d1d2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <img
          class="w-12 h-12 rounded-2 object-cover"
          src="https://images.unsplash.com/photo-1654805128419-11eacb0d1d2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
      <p class="text-text font-semibold font-jura text-black-100">
        Представитель бренда
      </p>
      <p class="text-xs-text font-jura text-black-100">
        Добрый день! Очень сожалеем, что с Вашим заказом произошла подобная
        ситуация. Мы обызателнь разберемся в сложившейся ситуации!
      </p>
    </div>
    <box-button class="transparent-icon">
      <template #icon>
        <svg-icon name="close" />
      </template>
    </box-button>
  </div>
</template>

<script>
import BoxButton from '../common/box-button.vue'
import starGrade from '../product/star-grade.vue'
export default {
  components: { starGrade, BoxButton },
}
</script>
