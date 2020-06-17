<template>
  <component
    :is="tag"
    v-focus
    class="sf-button"
    v-bind="$attrs"
    :disabled="disabled"
    :link="href"
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
     * To change for "a" tag choose false
     */
    nativeButton: {
      type: Boolean,
      default: true,
    },
    /**
     * Link for "a" tag
     */
    link: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    tag() {
      return this.nativeButton === true ? "button" : "SfLink";
    },
    href() {
      return this.nativeButton === true ? null : this.link;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfButton.scss";
</style>
