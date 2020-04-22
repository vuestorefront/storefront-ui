<template>
  <component
    :is="linkComponentTag"
    v-focus
    :tab-index="disabled ? -1 : 0"
    :class="{ 'sf-link--disabled': disabled }"
    :href="isExternal && link"
    :to="isRouter && link"
    class="sf-link"
    v-on="$listeners"
  >
    <!-- @slot -->
    <slot />
  </component>
</template>
<script>
import { focus } from "../../../utilities/directives/focus-directive.js";

export default {
  name: "SfLink",
  directives: { focus },
  props: {
    /**
     * Page route
     */
    link: {
      type: [String, Object, Boolean],
      default: null,
    },
    /**
     * Disabled link state
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isExternal() {
      return this.linkComponentTag === "a";
    },
    isRouter() {
      return this.link && this.linkComponentTag !== "a";
    },
    linkComponentTag() {
      return (this.link && typeof this.link === "object") || this.$router
        ? "router-link" // TODO set tag from config - 'router-link' or 'nuxt-link'
        : "a";
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfLink.scss";
</style>
