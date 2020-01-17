<template>
  <section class="sf-section">
    <!--@slot Section heading. Slot content will replace default <sf-heading> component-->
    <slot
      name="heading"
      v-bind="{ levelHeading, titleHeading, subtitleHeading }"
    >
      <SfHeading
        :level="levelHeading"
        :title="titleHeading"
        :subtitle="subtitleHeading"
        :class="{ 'sf-heading--no-underline': hasUnderlinedModifier }"
      />
    </slot>
    <!--@slot Section content.-->
    <div class="sf-section__content">
      <!--@slot Section content.-->
      <slot />
    </div>
  </section>
</template>
<script>
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
export default {
  name: "SfSection",
  components: {
    SfHeading
  },
  props: {
    /**
     * Heading title
     */
    titleHeading: {
      type: String,
      default: ""
    },
    /**
     * Heading subtitle
     */
    subtitleHeading: {
      type: String,
      default: ""
    },
    /**
     * Heading tag level
     */
    levelHeading: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      hasUnderlinedModifier: false
    };
  },
  mounted: function() {
    this.hasUnderlinedModifier = this.$el.classList.contains(
      "sf-section--no-underline"
    );
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfSection.scss";
</style>
