<template>
  <div class="sf-card">
    <SfImage :src="image" :alt="title" class="sf-card__image" />
    <!-- @slot Custom content for heading and description-->
    <slot name="details" v-bind="{ title, description, titleLevel }">
      <div class="sf-card__details">
        <SfHeading
          :title-level="titleLevel"
          :title="title"
          class="sf-card__title"
        />
        <p class="sf-card__description">
          {{ description }}
        </p>
      </div>
    </slot>
    <!-- @slot Slot content will replace button -->
    <slot name="action">
      <SfButton :link="link" class="sf-card__action" v-on="$listeners">
        {{ buttonText }}
      </SfButton>
    </slot>
  </div>
</template>
<script>
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";

export default {
  name: "SfCard",
  components: {
    SfButton,
    SfHeading,
    SfImage,
  },
  props: {
    /**
     * Card image
     */
    image: {
      type: String,
      default: "",
    },
    /**
     * Card title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Card title level of heading (form 1 as h1 tag to 6 as h6 tag)
     */
    titleLevel: {
      type: Number,
      default: 3,
    },
    /**
     * Card description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Card link
     */
    link: {
      type: String,
      default: "",
    },
    /**
     * Text displayed on button
     */
    buttonText: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCard.scss";
</style>
