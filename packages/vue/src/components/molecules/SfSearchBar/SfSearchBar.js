export default {
  name: "SfSearchBar",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String],
      default: null
    }
  },
  methods: {
    clearSearchBar() {
      this.$emit("input", "");
      this.$el.blur();
    }
  }
};
