<template>
  <li class="glide__slide sf-hero-item" :style="style" data-testid="hero-item">
    <component :is="wrapper" class="sf-hero-item__wrapper" :link="link">
      <slot name="subtitle" v-bind="{ subtitle }">
        <span
          :class="{ 'display-none': !subtitle }"
          class="sf-hero-item__subtitle"
          >{{ subtitle }}</span
        >
      </slot>
      <slot name="title" v-bind="{ title }">
        <span :class="{ 'display-none': !title }" class="sf-hero-item__title">{{
          title
        }}</span>
      </slot>
      <slot name="call-to-action" v-bind="{ buttonText, link }">
        <div v-if="buttonText && !mobileView" class="sf-hero-item__button">
          <SfButton :link="link" data-testid="hero-cta-button">
            {{ buttonText }}
          </SfButton>
        </div>
      </slot>
      <slot name="withImgTag">
        <SfImage
          class="sf-hero-item__image"
          :class="{ 'display-none': !imageTag }"
          :src="image"
          :alt="title"
          :image-tag="imageTag"
          :nuxt-img-config="nuxtImgConfig"
        />
      </slot>
    </component>
  </li>
</template>
<script>
import SfButton from "../../../atoms/SfButton/SfButton.vue";
import SfLink from "../../../atoms/SfLink/SfLink.vue";
import SfImage from "../../../atoms/SfImage/SfImage.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../../utilities/mobile-observer";
export default {
  name: "SfHeroItem",
  components: {
    SfButton,
    SfLink,
    SfImage,
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
    imageTag: {
      type: String,
      default: "",
    },
    nuxtImgConfig: {
      type: Object,
      default: () => ({}),
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
      if (this.imageTag) return;
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
