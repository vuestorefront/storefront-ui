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
        <SfButton
          v-if="buttonText"
          :link="link"
          data-testid="hero-cta-button"
          class="sf-hero-item__button"
        >
          {{ buttonText }}
        </SfButton>
      </slot>
      <slot name="withImgTag" />
    </component>
  </li>
</template>
<script>
import SfButton from "../../../atoms/SfButton/SfButton.vue";
import SfLink from "../../../atoms/SfLink/SfLink.vue";
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
    imageTag: {
      type: String,
      default: "",
    },
    nuxtImgConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    style() {
      const image = this.image;
      const isImageString = typeof image === "string";
      const background = this.background;
      const nuxtImgConvert = (imgUrl) => {
        return `url(${this.$img(imgUrl, this.nuxtImgConfig)})`;
      };
      if (this.imageTag === "nuxt-img" || this.imageTag === "nuxt-picture") {
        return {
          "--hero-item-background-image": isImageString
            ? nuxtImgConvert(image)
            : {
                "--hero-item-background-image-mobile": nuxtImgConvert(
                  image.mobile
                ),
                "--hero-item-background-image": nuxtImgConvert(image.desktop),
              },
          "--_banner-background-color": background,
        };
      }
      return {
        "background-image": isImageString
          ? `url(${image})`
          : {
              "--hero-item-background-image-mobile": image.mobile,
              "--hero-item-background-image": image.desktop,
            },
        "background-color": background,
      };
    },
    wrapper() {
      return this.link ? "SfLink" : "SfButton";
    },
  },
};
</script>
