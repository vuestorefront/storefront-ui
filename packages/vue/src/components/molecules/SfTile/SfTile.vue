<template>
  <div class="sf-tile" :style="style">
    <!-- @slot Use this slot to replace title -->
    <slot name="title" v-bind="{ title }">
      <h3 v-if="title" class="sf-tile__title">
        {{ title }}
      </h3>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfAlert",
  props: {
    /**
     * Tile title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Tile background color
     */
    background: {
      type: String,
      default: "",
    },
    /**
     * Tile image
     */
    image: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_tile-background-image": image.mobile
          ? `url(${image.mobile})`
          : `url(${image})`,
        "--_tile-background-desktop-image":
          image.desktop && `url(${image.desktop})`,
        "--tile-background-color": background,
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfTile.scss";
</style>
