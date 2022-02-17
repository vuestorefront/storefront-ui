<template>
  <component
    :is="linkComponentTag"
    v-focus
    v-bind="urlTag"
    class="sf-link"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

import { focus } from "../../../utilities/directives";
import { SfLinkProps } from "./SfLink.model";
export default {
  name: "SfLink",
  directives: { focus },
  props: {
    link: {
      type: [String, Object] as PropType<SfLinkProps["link"]>,
      required: true,
    },
  },
  computed: {
    isExternal(): boolean {
      return (
        typeof this.link === "string" && this.link.search(/(^\/|^#)/g) === -1
      );
    },
    isNativeLinkTag(): string {
      return this.isExternal || !this.$router;
    },
    urlTag(): Object {
      return this.isNativeLinkTag
        ? { href: this.link }
        : { to: this.link || "" };
    },
    linkComponentTag(): string {
      const routerLink = this.$nuxt ? "nuxt-link" : "router-link";
      return this.isNativeLinkTag ? "a" : routerLink;
    },
  },
};
</script>
<style lang="scss" src="./SfLink.scss"></style>
