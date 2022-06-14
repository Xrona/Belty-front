<template>
  <div>
    <template v-if="gallery.length > 0">
      <vue-slick-carousel
        :dots="true"
        :arrows="false"
        dots-class="gallery-dots"
        :swipe-to-slide="true"
      >
        <template v-for="image of gallery">
          <div :key="`gallery image ${image.id}`" class="gallery-image">
            <img :src="image.url" alt="Product image" />
          </div>
        </template>
        <template #customPaging>
          <div class="rounded-full w-3 h-3 bg-gray-40"></div>
        </template>
      </vue-slick-carousel>
    </template>
    <template v-else>
      <div>
        <img src="null" class="gallery-image" alt="Product image" />
      </div>
    </template>
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

  props: {
    gallery: {
      type: Array,
      default: Array,
    },
  },
}
</script>
