import SfSelectOption from "@/components/molecules/SfSelect/_internal/SfSelectOption.vue";
import Vue from "vue";

Vue.component("SfSelectOption", SfSelectOption);

export default {
  name: "SfSelect",
  data() {
    return {
      open: false
    };
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  watch: {
    value() {
      this.open = false;
    }
  },
  methods: {
    blured(e) {
      // this.open = false
    },
    clicked(e) {
      this.open = !this.open;
    }
  }
};
