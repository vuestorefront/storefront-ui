<template>
  <SfLink class="sf-category-card" :link="link" :style="style">
    <slot v-bind="{ label, count }">
      <div class="sf-category-card__details">
        <span
          :class="{ 'display-none': !label }"
          class="sf-category-card__label"
          >{{ label }}</span
        >
        <span
          :class="{ 'display-none': !count }"
          class="sf-category-card__count"
          >{{ count }}</span
        >
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
    label: {
      type: String,
      default: "",
    },
    count: {
      type: [String, Number],
      default: "",
    },
    background: {
      type: [String, Object],
      default: "",
    },
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
