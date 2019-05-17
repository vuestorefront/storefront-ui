export default {
  name: "SfRadio",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Number, String],
      default: null
    }
  }
};
