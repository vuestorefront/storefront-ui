export default {
  name: "SfTableData",
  props: {
    isHeader: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tableTag() {
      return this.isHeader ? "th" : "td";
    }
  }
};
