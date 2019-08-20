import Vue from "vue";
import SfAccordionItem from "./_internal/SfAccordionItem.vue";

Vue.component("SfAccordionItem", SfAccordionItem);

export default {
  name: "SfAccordion",
  data() {
    return {
      selectedContentItem: ""
    };
  },
  props: {
    /**
     * Array of items to populate the default markup
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Allows to open multiple accordion items if set to "true"
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Opens the first accordion item if set to "true"
     */
    firstOpen: {
      type: Boolean,
      default: false
    },
    /**
     * Toggles chevron icon in accordion item header
     */
    showChevron: {
      type: Boolean,
      default: true
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
      this.$children[0].isOpen = this.firstOpen;
    }
  },
  created() {
    this.$on("accordion-item-ready", () => {
      this.$off("accordion-item-ready");
      this.openFirst();
    });
  },
  mounted: function() {
    this.$on("toggle", this.toggle);
    this.$on("click", id => {
      this.selectedContentItem = id;
    });
  }
};
