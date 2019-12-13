export default {
  name: "SfTableRow",
  data() {
    return {
      columnsCount: 0
    };
  },
  mounted() {
    this.columnsCount = this.$slots.default.filter(node => node.tag).length;
    this.$parent.$emit("fold", this.columnsCount);
  }
};
