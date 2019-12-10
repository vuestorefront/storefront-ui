import SfTableRow from "./_internal/SfTableRow";
import SfTableData from "./_internal/SfTableData";
import Vue from "vue";

Vue.component("SfTableRow", SfTableRow);
Vue.component("SfTableData", SfTableData);

export default {
  name: "SfTable",
  components: {
    SfTableRow,
    SfTableData
  }
};
