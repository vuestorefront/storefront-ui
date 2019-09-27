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
