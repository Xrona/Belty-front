<template>
  <div class="row">
    <profile-header :name="name" />
    <div class="col-12 col-md-6 col-xl-8">
      <div class="row">
        <slot name="card" :className="'col-12 col-lg-6'" />
      </div>
    </div>
    <div class="cols-12 col-md-6 col-xl-4">
      <cart-sidebar />
    </div>
  </div>
</template>

<script>
import ProfileHeader from '@/components/profile/profile-header'
import CartSidebar from '@/components/profile/cart-sidebar'
export default {
  name: 'ProfileBody',

  components: { CartSidebar, ProfileHeader },

  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
