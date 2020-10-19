<template>
  <div class="sf-card">
    <!-- @slot Custom content that will replace default image-->
    <slot name="image" v-bind="image">
      <SfImage :src="image" class="sf-card__image" />
    </slot>
    <!-- @slot Custom content for heading and description-->
    <slot name="details" v-bind="cardDetails">
      <div v-if="cardDetails" class="sf-card__details">
        <SfHeading
          :level="cardDetails.level"
          :title="cardDetails.title"
          class="sf-card__title"
        >
          Baby Care
        </SfHeading>
        <p class="sf-card__description">
          {{ cardDetails.description }}
        </p>
      </div>
    </slot>
    <!-- @slot Slot content will replace button -->
    <slot name="action">
      <SfButton class="sf-card__action" v-on="$listeners">Learn more</SfButton>
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
      type: [String, Object],
      default: "",
    },
    /**
     * Object to define a heading, a level of heading and description for a card.
     * Should have values for title, level and description
     */
    cardDetails: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCard.scss";
</style>
