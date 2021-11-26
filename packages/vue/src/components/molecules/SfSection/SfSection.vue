<template>
  <section class="sf-section">
    <!--@slot Slot for section heading, replacing default <sf-heading> component-->
    <slot
      name="heading"
      v-bind="{ levelHeading, titleHeading, subtitleHeading }"
    >
      <SfHeading
        v-if="titleHeading || subtitleHeading"
        :level="levelHeading"
        :title="titleHeading"
        :description="subtitleHeading"
      />
    </slot>
    <div class="sf-section__content">
      <!--@slot Slot to replace section content.-->
      <slot />
    </div>
  </section>
</template>
<script>
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
export default {
  name: "SfSection",
  components: {
    SfHeading,
  },
  props: {
    titleHeading: {
      type: String,
      default: "",
    },
    subtitleHeading: {
      type: String,
      default: "",
    },
    levelHeading: {
      type: Number,
      default: 2,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSection.scss";
</style>
