export default {
  name: "SfSelectOption",
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    color: {
      type: String,
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
      this.$parent.$emit("update", this.indexes[this.value]);
    }
  }
};
