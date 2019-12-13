export default {
  name: "SfTableRow",
  data() {
    return {
      columnsCount: 0
    };
  },
  mounted() {
    this.$parent.updateColumnsCount(
      this.$slots.default.filter(node => node.tag).length
    );
  }
};
