<template>
  <div class="flex">
    <div>
      <button
        v-for="({src, alt}, i) in galleryImages"
        :key="`${src}-${i}`"
        class="hidden large:block min-w-[59px] p-1"
      >
        <img
          :src="require(`~/assets/images/gallery/${src}.webp`)"
          :alt="alt"
          loading="lazy"
          width="102"
          height="102"
          class="w-full"
        >
      </button>
    </div>
    <img
      src="~/assets/images/gallery/gallery.webp"
      alt="product 1"
      width="668"
      height="691"
    >
  </div>
</template>

<script>

export default {
  name: 'GalleryBase',
  props: {
    galleryImages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
