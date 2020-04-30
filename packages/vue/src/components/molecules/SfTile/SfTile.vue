<template>
  <div class="sf-tile" :style="style">
    <!-- @slot Use this slot to replace title -->
    <slot name="title" v-bind="{ title }">
      <h1 v-if="title" class="sf-tile__title">
        {{ title }}
      </h1>
    </slot>
  </div>
</template>
<script>
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
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
    ...mapMobileObserver(),
    style() {
      const image = this.image;
      const background = this.background;
      return this.isMobile
        ? {
            "--tile-background-image": image.mobile
              ? `url(${image.mobile})`
              : `url(${image})`,
            "--tile-background-color": background,
          }
        : {
            "--_tile-background-desktop-image":
              image.desktop && `url(${image.desktop})`,
            "--tile-background-color": background,
          };
    },
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfTile.scss";
</style>
