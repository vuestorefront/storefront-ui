export default {
  name: "SfSelectOption",
  props: {
    value: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    selected() {
      return this.$parent.selected;
    },
    indexes() {
      return this.$parent.indexes;
    }
  },
  methods: {
    clicked() {
      this.$parent.$emit("update", this.indexes[JSON.stringify(this.value)]);
    }
  }
};
