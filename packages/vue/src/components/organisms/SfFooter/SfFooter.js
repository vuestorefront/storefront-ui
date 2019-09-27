import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";

Vue.component("SfFooterColumn", SfFooterColumn);

export default {
  name: "SfFooter",
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
  }
};
