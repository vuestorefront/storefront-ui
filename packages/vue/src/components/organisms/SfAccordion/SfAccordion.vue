<template>
  <div
    class="sf-accordion"
    :class="{ 'sf-accordion--has-chevron': showChevron }"
  >
    <!--@slot default slot to setup SfAccordionItem elements -->
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
import { deprecationWarning } from "../../../utilities/helpers/deprecation-warning.js";
import SfAccordionItem from "./_internal/SfAccordionItem.vue";
Vue.component("SfAccordionItem", SfAccordionItem);
export default {
  name: "SfAccordion",
  props: {
    /**
     * Opens an accordion item based on title
     */
    open: {
      type: [String, Array],
      default: "",
    },
    /**
     * Opens the first accordion item if set to "true"
     * @deprecated will be removed in 1.0.0 use open prop instead
     */
    firstOpen: {
      type: Boolean,
      default: false,
    },
    /**
     * Allows to open multiple accordion items if set to "true"
     */
    multiple: {
      type: Boolean,
      default: false,
    },
    /**
     * Overlay transition effect
     */
    transition: {
      type: String,
      default: "fade",
    },
    showChevron: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.$on("toggle", this.toggleHandler);
    this.setAsOpen();
  },
  updated() {
    this.setAsOpen();
  },
  methods: {
    setAsOpen() {
      if (this.$children && this.$children.length) {
        // TODO remove in 1.0.0 ->
        if (this.firstOpen) {
          this.$children[0].isOpen = this.firstOpen;
          deprecationWarning(
            this.$options.name,
            "Prop 'firstOpen' has been deprecated and will be removed in v1.0.0. Use 'open' instead."
          );
          return;
        }
        // <- TODO remove in 1.0.0
        this.$children.forEach((child) => {
          child.isOpen = Array.isArray(this.open)
            ? this.open.includes(child.header)
            : this.open === child.header;
        });
      }
    },
    toggleHandler(slotId) {
      if (!this.multiple && !Array.isArray(this.open)) {
        this.$children.forEach((child) => {
          child._uid === slotId
            ? (child.isOpen = !child.isOpen)
            : (child.isOpen = false);
        });
      } else {
        const clickedHeader = this.$children.find((child) => {
          return child._uid === slotId;
        });
        clickedHeader.isOpen = !clickedHeader.isOpen;
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfAccordion.scss";
</style>
