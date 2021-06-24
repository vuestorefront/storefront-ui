<template>
  <SfLink :link="link" class="sf-tile" :style="style">
    <!-- @slot Use this slot to replace title -->
    <slot name="title" v-bind="{ title }">
      <SfHeading
        v-if="title"
        class="sf-tile__title"
        :level="3"
        :title="title"
      />
    </slot>
  </SfLink>
</template>
<script>
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
export default {
  name: "SfTile",
  components: {
    SfHeading,
    SfLink,
  },
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
    /**
     * Link title
     */
    link: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapMobileObserver(),
    style() {
      if (typeof this.background === String) {
        return {
          background: `url('${this.background}')`,
        };
      } else {
        return {
          background: `url(${
            this.background[this.isMobile ? "mobile" : "desktop"]
          })`,
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
