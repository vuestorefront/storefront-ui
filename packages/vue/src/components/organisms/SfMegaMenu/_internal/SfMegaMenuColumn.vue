<template>
  <div v-if="isActive" class="sf-mega-menu-column">
    <!-- @slot Custom title markup -->
    <slot name="title" v-bind="{ title }">
      <h3 v-focus tabindex="0" class="sf-mega-menu-column__title">{{ title }}</h3>
    </slot>
    <!-- @slot Column markup -->
    <slot />
  </div>
</template>
<script>
import { focus } from "../../../../utilities/directives/focus-directive.js";
export default {
  name: "SfMegaMenuColumn",
  directives: { focus },
  inject: ["megaMenu"],
  props: {
    /**
     * Column title
     */
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    isActive() {
      return this.megaMenu.active.includes(this.title);
    },
  },
  mounted() {
    this.megaMenu.updateItems(this.title);
  },
};
</script>
