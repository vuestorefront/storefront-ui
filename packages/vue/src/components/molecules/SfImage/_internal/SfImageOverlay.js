export default {
  name: "SfImage",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOverlay: false
    };
  },
  methods: {
    toggleOverlay(visible) {
      this.isOverlay = visible;
    }
  }
};
