<template>
  <section class="sf-banner" :style="style" v-on="isMobile ? $listeners : {}">
    <div class="sf-banner__container">
      <slot name="subtitle" v-bind="{ subtitle }">
        <h2 v-if="subtitle" class="sf-banner__subtitle">
          {{ subtitle }}
        </h2>
      </slot>
      <slot name="title" v-bind="{ title }">
        <h1 v-if="title" class="sf-banner__title">
          {{ title }}
        </h1>
      </slot>
      <slot name="description" v-bind="{ description }">
        <p v-if="description" class="sf-banner__description">
          {{ description }}
        </p>
      </slot>
      <slot name="call-to-action" v-bind="{ buttonText }">
        <SfButton
          v-if="buttonText"
          class="sf-banner__call-to-action color-secondary"
          v-on="!isMobile ? $listeners : {}"
        >
          {{ buttonText }}
        </SfButton>
      </slot>
    </div>
  </section>
</template>
<script>
import SfButton from "../../atoms/SfButton/SfButton.vue";
import {
  mapMobileObserver,
  unMapMobileObserver
} from "../../../utilities/mobile-observer";

export default {
  name: "SfBanner",
  components: {
    SfButton
  },
  props: {
    /**
     * Banner title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Banner subtitle (at the top)
     */
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    },
    /** Background color in HEX (eg #FFFFFF) */
    background: {
      type: String,
      default: ""
    },
    /** Background image. Influenced by $banner-background-size, $banner-background-position CSS props. */
    image: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    ...mapMobileObserver(),
    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_banner-background-image": image.mobile
          ? `url(${image.mobile})`
          : `url(${image})`,
        "--_banner-background-desktop-image": image.desktop,
        "--_banner-background-color": background
      };
    }
  },
  beforeDestroy() {
    unMapMobileObserver();
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfBanner.scss";
</style>
