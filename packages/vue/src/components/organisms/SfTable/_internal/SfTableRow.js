export default {
  name: "SfTableRow",
  inject: ["updateColumnsCount"],
  mounted() {
    this.updateColumnsCount(
      this.$slots.default.filter(node => node.tag).length
    );
  }
};
