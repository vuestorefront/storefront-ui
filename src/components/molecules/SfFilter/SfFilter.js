export default {
  name: "SfFilter",
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    count: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      defult: ""
    },
    group: {
      type: String,
      default: ""
    }
  },
  methods: {
    clicked(e) {
      this.$emit("click", e);
      this.$emit("update:group", this.value);
    }
  }
};
