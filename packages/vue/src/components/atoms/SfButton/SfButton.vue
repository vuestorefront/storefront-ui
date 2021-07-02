<template functional>
  <component
    :is="props.link ? injections.components.SfLink : 'button'"
    :class="[
      data.class,
      data.staticClass,
      'sf-button',
      {
        'is-disabled--button': $options.buttonActive(
          props.link,
          props.disabled
        ),
        'is-disabled--link': $options.linkActive(props.link, props.disabled),
      },
    ]"
    :style="[data.style, data.staticStyle]"
    :disabled="props.disabled"
    :link="props.link"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <!--@slot Use this slot to place content inside the button.-->
    <slot />
  </component>
</template>
<script>
import { focus } from "../../../utilities/directives";
import SfLink from "../SfLink/SfLink.vue";
export default {
  name: "SfButton",
  inject: {
    components: {
      default: { SfLink },
    },
  },
  directives: {
    focus,
  },
  props: {
    /**
     * Native button disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Link for "a" tag, when empty it is button.
     */
    link: {
      type: [String, Object],
      default: "",
    },
  },
  linkActive(link, disabled) {
    return link && disabled;
  },
  buttonActive(link, disabled) {
    return !link && disabled;
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfButton.scss";
</style>
