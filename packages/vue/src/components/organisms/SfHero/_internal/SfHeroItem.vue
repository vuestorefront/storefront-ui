<template>
  <li class="glide__slide sf-hero-item" :style="style" data-testid="hero-item">
    <component :is="wrapper" class="sf-hero-item__wrapper" :link="link">
      <!--@slot hero item subtitle. Slot content will replace default <h2> tag-->
      <slot name="subtitle" v-bind="{ subtitle }">
        <div v-if="subtitle" class="sf-hero-item__subtitle">{{ subtitle }}</div>
      </slot>
      <!--@slot hero item title. Slot content will replace default <h1> tag-->
      <slot name="title" v-bind="{ title }">
        <h1 v-if="title" class="sf-hero-item__title">{{ title }}</h1>
      </slot>
      <!--@slot Call to action section. Slot content will replace default SfButton component-->
      <slot name="call-to-action" v-bind="{ buttonText, link }">
        <div v-if="buttonText && !mobileView" class="sf-hero-item__button">
          <SfButton :link="link" data-testid="hero-cta-button">
            {{ buttonText }}
          </SfButton>
        </div>
      </slot>
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
    /** Hero item title */
    title: {
      type: String,
      default: "",
    },
    /** Hero item subtitle (at the top) */
    subtitle: {
      type: String,
      default: "",
    },
    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: "",
    },
    /** Background color */
    background: {
      type: String,
      default: "",
    },
    /** Background image path */
    image: {
      type: [Object, String],
      default: "",
    },
    /** link to be used in button if necessary */
    link: {
      type: String,
      default: "",
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
          : `url(${this.isMobile ? image.mobile : image.desktop})`,
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
