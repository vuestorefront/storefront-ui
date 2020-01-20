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
  data() {
    return {
      desktopMin: 1024,
      isMobile: false
    };
  },
  computed: {
    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--background-image": image.mobile
          ? `url(${image.mobile})`
          : `url(${image})`,
        "--background-desktop-image": image.desktop
          ? `url(${image.desktop})`
          : `url(${image})`,
        "--background-color": background
      };
    }
  },
  mounted() {
    this.isMobile =
      Math.max(document.documentElement.clientWidth, window.innerWidth) <
      this.desktopMin;
    window
      .matchMedia(`(max-width: ${this.desktopMin}px)`)
      .addListener(this.isMobileHandler);
  },
  beforeDestroy() {
    window
      .matchMedia(`(max-width: ${this.desktopMin}px)`)
      .removeListener(this.isMobileHandler);
  },
  methods: {
    isMobileHandler(e) {
      this.isMobile = e.matches;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfBanner.scss";
</style>
