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
    selected: {
      type: Boolean,
      default: false
    }
  }
};
