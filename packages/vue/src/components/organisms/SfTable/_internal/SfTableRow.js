export default {
  name: "SfTableRow",
  mounted() {
    this.$parent.updateColumnsCount(
      this.$slots.default.filter(node => node.tag).length
    );
  }
};
