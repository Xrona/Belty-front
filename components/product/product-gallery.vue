<template>
  <div>
    <vue-slick-carousel
      :dots="true"
      :arrows="false"
      dots-class="gallery-dots"
      :swipe-to-slide="true"
    >
      <div class="gallery-image">
        <img
          src="https://images.unsplash.com/photo-1638913662735-a13cfc1dd8d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          alt=""
        />
      </div>
      <div class="gallery-image">
        <img
          src="https://images.unsplash.com/photo-1638913662735-a13cfc1dd8d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          alt=""
        />
      </div>
      <div class="gallery-image">
        <img
          src="https://images.unsplash.com/photo-1638913662735-a13cfc1dd8d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          alt=""
        />
      </div>
      <template #customPaging>
        <div class="rounded-full w-3 h-3 bg-gray-40"></div>
      </template>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'ProductGallery',

  components: {
    VueSlickCarousel,
  },
}
</script>
