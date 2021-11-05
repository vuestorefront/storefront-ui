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
    level: {
      type: Number,
      default: 2,
    },
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
    return headingLevel < 8 ? `h${headingLevel}` : `h2`;
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfHeading.scss";
</style>
