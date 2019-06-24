import Vue from "vue";
import SfImageOverlay from "./_internal/SfImageOverlay.vue";

Vue.component("SfImageOverlay", SfImageOverlay);

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
  methods: {}
};
