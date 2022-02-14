<template>
  <section class="sf-section">
    <slot
      name="heading"
      v-bind="{ levelHeading, titleHeading, subtitleHeading }"
    >
      <SfHeading
        v-if="titleHeading"
        :level="levelHeading"
        :title="titleHeading"
        :description="subtitleHeading"
      />
    </slot>
    <div class="sf-section__content">
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
<style lang="scss" src="./SfSection.scss"></style>
