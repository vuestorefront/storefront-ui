<template>
  <tbody>
    <tr class="sf-table__row">
      <slot />
    </tr>
  </tbody>
</template>
<script>
export default {
  name: "SfTableRow",
  inject: ["table"],
  mounted() {
    if (!this.$slots.default) return;
    this.table.updateColumnsCount(
      this.$slots.default.filter((node) => node.tag).length
    );
  },
};
</script>
