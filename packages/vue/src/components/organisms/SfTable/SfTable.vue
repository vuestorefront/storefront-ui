<template>
  <table ref="table" class="sf-table">
    <slot />
  </table>
</template>
<script>
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
      this.$refs.table.style.setProperty(
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
