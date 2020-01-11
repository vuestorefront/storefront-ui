<template>
  <tr class="sf-table__heading">
    <slot />
  </tr>
</template>
<script>
export default {
  name: "SfTableHeading",
  inject: ["table"],
  mounted() {
    if (!this.$slots.default) return;
    this.table.updateColumnsCount(
      this.$slots.default.filter(node => node.tag).length
    );
  }
};
</script>
