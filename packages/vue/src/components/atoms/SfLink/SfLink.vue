<template functional>
  <component
    :is="$options.linkComponentTag($options.isExternal, $nuxt, $router)"
    v-bind="
      $options.attributes($options.isExternal, $router, props.link, attrs)
    "
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
    /**
     * Page route
     */
    link: {
      type: [String, Object],
      default: "",
    },
  },
  isExternal() {
    return (
      typeof this.link === "string" && this.link.search(/(^\/|^#)/g) === -1
    );
  },
  attributes(isExternal, $router, link, attrs) {
    const urlTag = isExternal || !$router ? { href: link } : { to: link };
    return {
      ...attrs,
      ...urlTag,
    };
  },
  linkComponentTag(isExternal, $nuxt, $router) {
    const routerLink = $nuxt ? "nuxt-link" : "router-link";
    return isExternal || !$router ? "a" : routerLink;
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfLink.scss";
</style>
