<template>
  <component
    :is="linkComponentTag"
    v-focus
    :tabIndex="disabled ? -1 : 0"
    :class="{ 'sf-link--disabled': disabled }"
    :href="linkComponentTag === 'a' ? link : undefined"
    :to="link && linkComponentTag !== 'a' ? link : undefined"
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
     * Tag link
     */
    linkTag: {
      type: String,
      default: "a",
    },
    /**
     * Page route
     */
    link: {
      type: [String, Object, Boolean],
      default: "",
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
    linkComponentTag() {
      let tag;
      this.linkTag && (tag = this.linkTag);
      ((this.link && typeof this.link === "object") || this.$router) &&
        (tag = "router-link"); // TODO set tag from config - 'router-link' or 'nuxt-link'
      return tag;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfLink.scss";
</style>
