import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";

Vue.component("SfFooterColumn", SfFooterColumn);

export default {
  name: "SfFooter",
  data() {
    return {
      widthOfWindow: window.innerWidth
    };
  },
  props: {
    /**
     * Style for accordion column header
     */
    accordionColumnHeaderStyle: {
      type: Object,
      default: () => ({
        color: "#1D1F2",
        fontWeight: "420",
        fontSize: "18px",
        textTransform: "uppercase",
        padding: "1rem"
      })
    },
    /**
     * Style for accordion column content
     */
    accordionColumnContentStyle: {
      type: Object,
      default: () => ({
        padding: "0.5rem 0.5rem 0.5rem 1rem",
        backgroundColor: "#ffffff"
      })
    },
    /**
     * Style for accordion column inline content
     */
    accordionColumnInlineContentStyle: {
      type: Object,
      default: () => ({
        display: "inline-block",
        padding: "0.5rem 1.25rem 0.5rem 1rem",
        backgroundColor: "#ffffff"
      })
    },
    /**
     * Style for accordion chevron
     */
    accordionChevronStyle: {
      type: Object,
      default: () => ({
        position: "absolute",
        right: "1rem",
        top: "1rem"
      })
    },
    /**
     * Style for columns
     */
    columnItemsStyle: {
      type: Object,
      default: () => ({ lineHeight: "1.8" })
    },
    /**
     * Column items
     */
    columnItems: {
      type: Array,
      default: () => []
    },
    /**
     * Social items
     */
    socialItems: {
      type: Object,
      default: () => ({})
    }
  },
  mounted: function() {
    window.addEventListener("resize", () => {
      this.widthOfWindow = window.innerWidth;
    });
  },
  computed: {
    isMobileWidth() {
      return this.widthOfWindow <= 768;
    }
  }
};
