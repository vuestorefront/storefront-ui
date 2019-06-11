export default {
  name: "SfSearchBar",
  props: {
    placeholder: {
      type: String,
      default: "Search for..."
    },
    value: {
      type: [Number, String],
      default: null
    },
    icon: {
      type: Boolean,
      default: true
    }
  }
};
