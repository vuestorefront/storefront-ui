<template>
  <component
    :is="linkComponentTag"
    v-focus
    :href="isExternal && link"
    :to="!isExternal && link"
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
    isExternal() {
      return typeof this.link === "string" && this.link.indexOf(/https?/g) > -1
        ? true
        : false;
    },
    linkComponentTag() {
      const routerLink = this.$nuxt ? "nuxt-link" : "router-link";
      return this.isExternal ? routerLink : "a";
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfLink.scss";
</style>
