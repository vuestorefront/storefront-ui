<template>
  <div class="sf-heading">
    <!--@slot Heading title. Slot content will replace default <h> tag-->
    <slot name="title" v-bind="{ title }">
      <component
        :is="`h${level}`"
        class="sf-heading__title"
        :class="level > 1 && `h${level}`"
      >
        {{ title }}
      </component>
    </slot>
    <!--@slot Heading description. Slot content will replace default <div> tag-->
    <slot name="description" v-bind="{ description }">
      <div v-if="hasDescription" class="sf-heading__description">
        {{ description }}
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfHeading",
  props: {
    /**
     * Heading level
     */
    level: {
      type: Number,
      default: 2,
    },
    /**
     * Heading title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Heading description
     */
    description: {
      type: String,
      default: "",
    },
  },
  computed: {
    hasDescription() {
      return !!this.description || this.$slots.hasOwnProperty("description");
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfHeading.scss";
</style>
