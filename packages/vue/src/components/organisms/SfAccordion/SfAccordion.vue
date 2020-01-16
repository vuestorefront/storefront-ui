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
import SfAccordionItem from "./_internal/SfAccordionItem.vue";
Vue.component("SfAccordionItem", SfAccordionItem);
export default {
  name: "SfAccordion",
  props: {
    /**
     * Opens the first accordion item if set to "true"
     */
    firstOpen: {
      type: Boolean,
      default: false
    },
    /**
     * Allows to open multiple accordion items if set to "true"
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Overlay transition effect
     */
    transition: {
      type: String,
      default: "fade"
    },
    showChevron: {
      type: Boolean,
      default: true
    }
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
      if (this.$children.length) {
        this.$children[0].isOpen = this.firstOpen;
      }
    },
    toggleHandler(slotId) {
      if (!this.multiple) {
        this.$children.forEach(child => {
          child._uid === slotId
            ? (child.isOpen = !child.isOpen)
            : (child.isOpen = false);
        });
      } else {
        const clickedHeader = this.$children.find(child => {
          return child._uid === slotId;
        });
        clickedHeader.isOpen = !clickedHeader.isOpen;
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfAccordion.scss";
</style>
