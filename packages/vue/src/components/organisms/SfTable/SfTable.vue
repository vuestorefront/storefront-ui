<template>
  <table class="sf-table">
    <!-- @slot Slots in every component are available to fill them with proper content -->
    <slot />
  </table>
</template>
<script>
import Vue from "vue";
import SfTableRow from "./_internal/SfTableRow.vue";
import SfTableData from "./_internal/SfTableData.vue";
import SfTableHeader from "./_internal/SfTableHeader.vue";
import SfTableHeading from "./_internal/SfTableHeading.vue";
Vue.component("SfTableRow", SfTableRow);
Vue.component("SfTableData", SfTableData);
Vue.component("SfTableHeader", SfTableHeader);
Vue.component("SfTableHeading", SfTableHeading);
export default {
  name: "SfTable",
  provide() {
    const table = {};
    Object.defineProperty(table, "updateColumnsCount", {
      value: this.updateColumnsCount,
    });
    return { table };
  },
  methods: {
    updateColumnsCount(columnsCount) {
      this.$el.style.setProperty(
        "--_table-column-width",
        Math.ceil(columnsCount / 2)
      );
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfTable.scss";
</style>
