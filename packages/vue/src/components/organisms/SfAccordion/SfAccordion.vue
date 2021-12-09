<template>
  <div class="sf-accordion" :class="{ 'has-chevron': showChevron }">
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
    open: {
      type: [String, Array],
      default: "",
    },
    firstOpen: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
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
      internalMultiple: this.multiple,
    };
  },
  computed: {
    headersAreClosed() {
      return this.$children
        .map((header) => header.isOpen)
        .every((header) => header === false);
    },
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
    this.$emit("click:open-header");
  },
  updated() {
    this.setAsOpen();
    this.$emit("click:open-header");
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
          this.internalMultiple = true;
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
      if (!this.internalMultiple && !Array.isArray(this.openHeader)) {
        this.$children.forEach((child) => {
          if (child._uid === slotId) {
            child.isOpen = !child.isOpen;
            this.openHeader = child.header;
            this.$emit("click:open", this.openHeader);
          } else {
            child.isOpen = false;
          }
        });
      } else {
        const clickedHeader = this.$children.find((child) => {
          return child._uid === slotId;
        });
        clickedHeader.isOpen = !clickedHeader.isOpen;
        this.$emit("click:open", clickedHeader.isOpen);
      }
      if (this.headersAreClosed) {
        this.openHeader = "";
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfAccordion.scss";
</style>
