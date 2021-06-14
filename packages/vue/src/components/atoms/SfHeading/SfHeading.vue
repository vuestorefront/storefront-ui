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
        :class="props.level > 1 && `h${props.level}`"
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
    /**
     * Heading description
     */
    description: {
      type: String,
      default: "",
    },
  },
  hasDescription(descriptionProp, slots) {
    return !!descriptionProp || slots().description;
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfHeading.scss";
</style>
