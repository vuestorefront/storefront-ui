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
    hover() {
      return this.$parent.hover;
    }
  },
  methods: {
    mouseleaved() {
      this.$parent.hover = null;
    },
    mouseovered() {
      this.$parent.hover = this.value;
    },
    clicked(e) {
      this.$parent.$emit("update", this.value);
    }
  }
};
