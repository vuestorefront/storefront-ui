<template>
  <component
    :is="tag"
    v-focus
    class="sf-button"
    v-bind="$attrs"
    :disabled="disabled"
    :type="isButton"
    :link="link"
    v-on="$listeners"
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
  components: {
    SfLink,
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
    /**
     * Type for button: "submit" or "button".
     * "Button" type is default.
     * If it's a link, leave empty.
     */
    type: {
      type: String,
      required: false,
      default: "button",
      validator(value) {
        return ["button", "submit", ""].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    tag() {
      return this.link ? "SfLink" : "button";
    },
    isButton() {
      return !this.link ? this.type : "";
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfButton.scss";
</style>
