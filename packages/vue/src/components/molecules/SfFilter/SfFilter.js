// @vue/component
export default {
  name: "SfFilter",
  props: {
    label: {
      type: String,
      default: ""
    },
    count: {
      type: [String, Number],
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
};
