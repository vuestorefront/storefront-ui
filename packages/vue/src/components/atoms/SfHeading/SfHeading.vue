<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-heading']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <!--@slot Heading title. Slot content will replace default <h> tag-->
    <slot name="title" v-bind="{ props }">
      <component
        :is="`h${props.level}`"
        class="sf-heading__title"
        :class="props.level > 1 && $options.headingClass(props.level)"
      >
        {{ props.title }}
      </component>
    </slot>
    <!--@slot Heading description. Slot content will replace default <div> tag-->
    <slot name="description" v-bind="{ props }">
      <div
        v-if="$options.hasDescription(props.description, slots)"
        class="sf-heading__description"
      >
        {{ props.description }}
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
    description: {
      type: String,
      default: "",
    },
  },
  hasDescription(descriptionProp, slots) {
    return !!descriptionProp || slots().description;
  },
  headingClass(headingLevel) {
    switch (headingLevel) {
      case 1:
        return "h1";
      case 3:
        return "h3";
      case 4:
        return "h4";
      case 5:
        return "h5";
      case 6:
        return "h6";
      default:
        return "h2";
    }
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfHeading.scss";
</style>
