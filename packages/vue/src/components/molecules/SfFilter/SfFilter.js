// @vue/component
export default {
  name: "SfFilter",
  props: {
    label: {
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
    selected: {
      type: Boolean,
      default: false
    }
  }
};
