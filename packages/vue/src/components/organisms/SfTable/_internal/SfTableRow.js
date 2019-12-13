export default {
  name: "SfTableRow",
  mounted() {
    console.log(this.$slots.default.filter(node => node.tag).length);
  }
};
