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
import { focus } from "../../../utilities/directives";
export default {
  name: "SfLink",
  directives: { focus },
  props: {
    link: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    isExternal() {
      return (
        typeof this.link === "string" && this.link.search(/(^\/|^#)/g) === -1
      );
    },
    isNativeLinkTag() {
      return this.isExternal || !this.$router;
    },
    urlTag() {
      return this.isNativeLinkTag ? { href: this.link } : { to: this.link };
    },
    linkComponentTag() {
      const routerLink = this.$nuxt ? "nuxt-link" : "router-link";
      return this.isNativeLinkTag ? "a" : routerLink;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfLink.scss";
</style>
