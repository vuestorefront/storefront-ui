export default {
  name: "SfTableHeading",
  inject: ["updateColumnsCount"],
  mounted() {
    this.updateColumnsCount(
      this.$slots.default.filter(node => node.tag).length
    );
  }
};
