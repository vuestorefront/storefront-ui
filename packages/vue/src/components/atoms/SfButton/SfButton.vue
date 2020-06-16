<template>
  <component
    :is="tag"
    v-focus
    class="sf-button"
    v-bind="$attrs"
    :disabled="disabled"
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
     * To change for "a" tag chose false
     */
    nativeButton: {
      type: Boolean,
      default: true,
    },
    /**
     * Link for "a" tag
     */
    href: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    tag() {
      return this.nativeButton === true ? "button" : "SfLink";
    },
    link() {
      return this.nativeButton === true ? undefined : this.href;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfButton.scss";
</style>
