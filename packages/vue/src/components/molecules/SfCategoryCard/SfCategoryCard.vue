<template>
  <SfLink class="sf-category-card" :link="link" :style="style">
    <!--@slot Default. Here you can pass content of your category card-->
    <slot v-bind="{ label, count }">
      <div class="sf-category-card__details">
        <span v-if="label" class="sf-category-card__label">{{ label }}</span>
        <span v-if="count" class="sf-category-card__count">{{ count }}</span>
      </div>
    </slot>
  </SfLink>
</template>
<script>
import SfLink from "../../atoms/SfLink/SfLink.vue";

import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";

export default {
  name: "SfCategoryCard",
  components: {
    SfLink,
  },
  props: {
    /**
     * Label for card
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Count for card
     */
    count: {
      type: [String, Number],
      default: "",
    },
    /**
     * Defines background of card.
     * Can be a string or object with strings to display images for desktop and mobile
     */
    background: {
      type: [String, Object],
      default: "",
    },
    /**
     * Link for category
     */
    link: {
      type: [String, Object],
      default: "",
    },
  },
  data() {
    return {
      isMobileView: false,
    };
  },
  computed: {
    ...mapMobileObserver(),
    style() {
      const background = this.background;
      if (typeof background === "string") {
        return {
          background: `url('${background}')`,
        };
      } else {
        return {
          background: this.isMobileView
            ? `url('${background.mobile}')`
            : `url('${background.desktop}')`,
        };
      }
    },
  },
  mounted() {
    this.isMobileView = this.isMobile;
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCategoryCard.scss";
</style>
