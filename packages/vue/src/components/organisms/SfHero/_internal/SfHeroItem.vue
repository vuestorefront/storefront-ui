<template>
  <li class="glide__slide sf-hero-item" :style="style" data-testid="hero-item">
    <component :is="wrapper" class="sf-hero-item__wrapper" :link="link">
      <!--@slot hero item subtitle. Slot content will replace default <h2> tag (in SfHeroItem component)-->
      <slot name="subtitle" v-bind="{ subtitle }">
        <span
          :class="{ 'display-none': !subtitle }"
          class="sf-hero-item__subtitle"
          >{{ subtitle }}</span
        >
      </slot>
      <!--@slot hero item title. Slot content will replace default <h1> tag (in SfHeroItem component) -->
      <slot name="title" v-bind="{ title }">
        <span :class="{ 'display-none': !title }" class="sf-hero-item__title">{{
          title
        }}</span>
      </slot>
      <!--@slot Call to action section. Slot content will replace default SfButton component (in SfHeroItem component) -->
      <slot name="call-to-action" v-bind="{ buttonText, link }">
        <div v-if="buttonText && !mobileView" class="sf-hero-item__button">
          <SfButton :link="link" data-testid="hero-cta-button">
            {{ buttonText }}
          </SfButton>
        </div>
      </slot>
      <!--@slot hero item withImgTag.
      Slot dedicated to img tags or other components with this tag (e.g. SfImage, SfCimage) that can be used as images for background.
      If you want to use this slot, make sure that background and image props are NOT provided (in SfHeroItem component). -->
      <slot name="withImgTag" />
    </component>
  </li>
</template>
<script>
import SfButton from "../../../atoms/SfButton/SfButton.vue";
import SfLink from "../../../atoms/SfLink/SfLink.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../../utilities/mobile-observer";
export default {
  name: "SfHeroItem",
  components: {
    SfButton,
    SfLink,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
    image: {
      type: [Object, String],
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      mobileView: false,
    };
  },
  computed: {
    ...mapMobileObserver(),
    style() {
      const image = this.image;
      const isImageString = typeof image === "string";
      const background = this.background;
      return {
        "background-image": isImageString
          ? `url(${image})`
          : `url(${this.mobileView ? image.mobile : image.desktop})`,
        "background-color": background,
      };
    },
    wrapper() {
      return !this.mobileView ? "div" : this.link ? "SfLink" : "SfButton";
    },
  },
  mounted() {
    this.mobileView = this.isMobile;
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
};
</script>
