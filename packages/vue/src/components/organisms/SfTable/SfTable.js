import SfTableRow from "./_internal/SfTableRow.vue";
import SfTableData from "./_internal/SfTableData.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

import Vue from "vue";

Vue.component("SfTableRow", SfTableRow);
Vue.component("SfTableData", SfTableData);

export default {
  name: "SfTable",
  data() {
    return {
      columnsCount: 0
    };
  },
  components: {
    SfButton,
    SfTableRow,
    SfTableData
  },
  mounted() {
    this.columnsCount = this.$slots.default[0].componentInstance.$children.length;
    document
      .querySelector(".sf-table-data")
      .style.setProperty("--table-column-count", this.columnsCount);
  }
};
