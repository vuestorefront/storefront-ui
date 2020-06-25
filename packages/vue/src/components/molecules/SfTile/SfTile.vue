<template>
  <div class="sf-tile" :style="style">
    <!-- @slot Use this slot to replace title -->
    <slot name="title" v-bind="{ title }">
      <div v-if="title" class="sf-tile__title">
        {{ title }}
      </div>
    </slot>
  </div>
</template>
<script>
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
export default {
  name: "SfTile",
  props: {
    /**
     * Tile title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Tile background image
     */
    background: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    ...mapMobileObserver(),
    style() {
      if (typeof this.background === String) {
        return {
          "--tile-background-image": `url('${this.background}')`,
        };
      } else {
        return {
          "--tile-background-image": this.isMobile
            ? `url('${this.background.mobile}')`
            : `url('${this.background.desktop}')`,
        };
      }
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
