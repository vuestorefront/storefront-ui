export default {
  name: "SfTableRow",
  inject: ["provided"],
  mounted() {
    this.provided.updateColumnsCount(
      this.$slots.default.filter(node => node.tag).length
    );
  }
};
