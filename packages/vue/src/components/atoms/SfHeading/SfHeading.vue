<template>
  <header class="sf-heading">
    <!--@slot Heading title. Slot content will replace default <h> tag-->
    <slot name="title" v-bind="{ title }">
      <component :is="`h${level}`" class="sf-heading__title">
        {{ title }}
      </component>
    </slot>
    <!--@slot Heading subtitle. Slot content will replace default <div> tag-->
    <slot name="subtitle" v-bind="{ subtitle }">
      <div v-if="hasSubtitle" class="sf-heading__subtitle">
        {{ subtitle }}
      </div>
    </slot>
  </header>
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
      default: 2
    },
    /**
     * Heading title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Heading subtitle
     */
    subtitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    hasSubtitle() {
      return !!this.subtitle || this.$slots.hasOwnProperty("subtitle");
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfHeading.scss";
</style>
