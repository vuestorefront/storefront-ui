<template>
  <SfLink class="sf-category-card" :link="link" :style="style">
    <!--@slot Default. Here you can pass content of your category card-->
    <slot v-bind="{ cardDetails }">
      <SfProperty
        v-if="cardDetails"
        class="sf-category-card__details sf-property--without-suffix sf-property--full-width"
        :name="cardDetails.name"
        :value="cardDetails.value"
      />
    </slot>
  </SfLink>
</template>
<script>
import SfProperty from "../../atoms/SfProperty/SfProperty.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";

import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";

export default {
  name: "SfCategoryCard",
  components: {
    SfProperty,
    SfLink,
  },
  props: {
    /**
     * Object to define card name and value. Should have values for name and value
     */
    cardDetails: {
      type: Object,
      default: () => {},
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
          background: this.isMobile
            ? `url('${background.mobile}')`
            : `url('${background.desktop}')`,
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
@import "~@storefront-ui/shared/styles/components/molecules/SfCategoryCard.scss";
</style>
