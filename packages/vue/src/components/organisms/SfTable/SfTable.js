import SfTableRow from "./_internal/SfTableRow.vue";
import SfTableData from "./_internal/SfTableData.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

import Vue from "vue";

Vue.component("SfTableRow", SfTableRow);
Vue.component("SfTableData", SfTableData);

export default {
  name: "SfTable",
  components: {
    SfButton
  },
  methods: {
    updateColumnsCount(columnsCount) {
      this.$el.style.setProperty(
        "--mobile-column",
        Math.ceil(columnsCount / 2)
      );
    }
  }
};
