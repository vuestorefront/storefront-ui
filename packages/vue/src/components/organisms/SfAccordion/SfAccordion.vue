<template>
  <div class="sf-accordion" :class="{ 'has-chevron': showChevron }">
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
import SfAccordionItem from "./_internal/SfAccordionItem.vue";
Vue.component("SfAccordionItem", SfAccordionItem);
export default {
  name: "SfAccordion",
  props: {
    open: {
      type: [String, Array],
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: "",
    },
    showChevron: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      items: [],
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
    this.setAccordionItems();
    this.setAsOpen();
    this.$emit("click:open-header");
  },
  updated() {
    this.setAccordionItems();
    this.setAsOpen();
    this.$emit("click:open-header");
  },
  methods: {
    setAccordionItems() {
      if (this.$children && this.$children.length) {
        this.items = this.$children;
      }
    },
    setAsOpen() {
      if (this.$children && this.$children.length) {
        if (this.open === "all") {
          this.internalMultiple = true;
          this.openHeader = this.items.map((child) => child.header);
        }
        this.items.forEach((child) => {
          child.isOpen = Array.isArray(this.openHeader)
            ? this.openHeader.includes(child.header)
            : this.openHeader === child.header;
        });
      }
    },
    toggleHandler(slotId) {
      if (!this.internalMultiple && !Array.isArray(this.openHeader)) {
        this.items.forEach((child) => {
          if (child._uid === slotId) {
            child.isOpen = !child.isOpen;
            this.openHeader = child.header;
            this.$emit("click:open", this.openHeader);
          } else {
            child.isOpen = false;
          }
        });
      } else {
        const clickedHeader = this.items.find((child) => {
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
<style lang="scss" src="./SfAccordion.scss"></style>
