<template>
  <div class="sf-card">
    <SfImage
      :width="imageWidth"
      :height="imageHeight"
      :src="image"
      :alt="title"
      class="sf-card__image"
    />
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
    image: {
      type: String,
      default: "",
    },
    imageWidth: {
      type: [String, Number],
      default: "",
    },
    imageHeight: {
      type: [String, Number],
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    titleLevel: {
      type: Number,
      default: 3,
    },
    description: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
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
