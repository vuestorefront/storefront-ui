<template>
  <component
    :is="tag"
    v-focus
    class="sf-button"
    :class="{ 'sf-link--disabled': typeof linkDisabled === undefined }"
    v-bind="$attrs"
    :disabled="disabled"
    :link="linkDisabled"
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
  },
  computed: {
    tag() {
      return this.link ? "SfLink" : "button";
    },
    linkDisabled() {
      return this.link && this.disabled ? undefined : null;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfButton.scss";
</style>
