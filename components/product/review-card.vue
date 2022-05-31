<template>
  <div class="px-3 py-4 flex flex-col gap-2 bg-gray-100 rounded-5">
    <div class="flex gap-2 items-center">
      <img
        src=""
        alt="UserAvatar"
        class="w-11 h-11 rounded-full bg-gray-40 object-cover"
      />
      <div class="flex flex-col gap-1">
        <h4 class="text-h4 font-montserrat text-black-60">Paulo Pauolo</h4>
        <span class="text-xs-text font-jura text-black-80">31.02.2022</span>
      </div>
    </div>
    <star-grade />
    <p class="text-text font-jura text-black-60">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
      assumenda blanditiis commodi consectetur dignissimos, dolore ducimus
      eligendi facilis fugit hic impedit laborum maxime minus nesciunt nihil
      nostrum optio perferendis praesentium, quas quia quis recusandae
      reprehenderit temporibus, voluptate voluptates! Ab, natus?
    </p>
    <div class="flex gap-2 items-center flex-wrap">
      <img
        src=""
        alt="Comment image"
        class="w-14 h-14 object-cover rounded-2 bg-gray-40"
      />
      <img
        src=""
        alt="Comment image"
        class="w-14 h-14 object-cover rounded-2 bg-gray-40"
      />
    </div>
  </div>
</template>

<script>
import StarGrade from '@/components/product/star-grade'
export default {
  name: 'ReviewCard',
  components: { StarGrade },
}
</script>
