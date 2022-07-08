<template>
  <div class="flex">
    <div>
      <img
        v-for="({src, alt}, i) in galleryImages"
        :key="i"
        :src="require(`~/assets/images/gallery/${src}`)"
        :alt="alt"
        class="hidden large:block min-w-[59px] p-1"
      >
    </div>
    <img src="~/assets/images/gallery/gallery.png" alt="product 1">
  </div>
</template>

<script>

export default {
  name: 'GalleryBase',
  props: {
    galleryImages: {
      type: Array,
      default: () => []
    }
  }
};
</script>
