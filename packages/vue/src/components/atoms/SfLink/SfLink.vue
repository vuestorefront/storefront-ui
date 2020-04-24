<template>
  <component
    :is="linkComponentTag"
    v-focus
    v-bind="urlTag"
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
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    urlTag() {
      return this.isExternal || !this.$router
        ? { href: this.link }
        : { to: this.link };
    },
    isExternal() {
      return typeof this.link === "string" && this.link.search(/https?/g) > -1;
    },
    linkComponentTag() {
      const routerLink = this.$nuxt ? "nuxt-link" : "router-link";
      return this.isExternal || !this.$router ? "a" : routerLink;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfLink.scss";
</style>
