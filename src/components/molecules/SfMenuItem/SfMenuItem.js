export default {
  name: "SfMenuItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    mobileNavIcon: {
      type: [String, Boolean],
      default: "/assets/chevron_right.svg"
    },
    count: {
      type: String,
      default: ""
    }
  }
};
