import Vue from "vue";
import SfAccordionItem from "./_internal/SfAccordionItem.vue";

Vue.component("SfAccordionItem", SfAccordionItem);

export default {
  name: "SfAccordion",
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    firstOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle(slotId) {
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
    },
    openFirst() {
      this.firstOpen ? (this.$children[0].isOpen = true) : "";
    }
  },
  mounted: function() {
    this.$on("toggle", this.toggle);
    this.openFirst();
  }
};
