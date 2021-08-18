<template>
  <div class="sf-accordion" :class="{ 'has-chevron': showChevron }">
    <!--@slot default slot to setup SfAccordionItem elements -->
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
import { deprecationWarning } from "../../../utilities/helpers";
import SfAccordionItem from "./_internal/SfAccordionItem.vue";
Vue.component("SfAccordionItem", SfAccordionItem);
export default {
  name: "SfAccordion",
  props: {
    /**
     * Opens an accordion item based on title. If 'all' string is passed then all items will be open by default.
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
      default: "sf-expand",
    },
    showChevron: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      openHeader: this.open,
    };
  },
  watch: {
    open(newValue, oldValue) {
      if (!newValue || newValue === oldValue) return;
      const activeHeader = this.$children.find(
        (accordionItem) => accordionItem.header === newValue
      );
      this.toggleHandler(activeHeader._uid);
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
        if (this.open === "all") {
          this.multiple = true;
          this.openHeader = this.$children.map((child) => child.header);
        }
        this.$children.forEach((child) => {
          child.isOpen = Array.isArray(this.openHeader)
            ? this.openHeader.includes(child.header)
            : this.openHeader === child.header;
        });
      }
    },
    toggleHandler(slotId) {
      if (!this.multiple && !Array.isArray(this.openHeader)) {
        this.$children.forEach((child) => {
          if (child._uid === slotId) {
            child.isOpen = !child.isOpen;
            this.openHeader = child.header;
            this.$emit("click:open-header", child.header);
          } else {
            child.isOpen = false;
          }
        });
      } else {
        const clickedHeader = this.$children.find((child) => {
          return child._uid === slotId;
        });
        clickedHeader.isOpen = !clickedHeader.isOpen;
      }
      const headersAreClosed = this.$children
        .map((header) => header.isOpen)
        .every((header) => header === false);

      if (headersAreClosed) {
        this.openHeader = "";
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfAccordion.scss";
</style>
