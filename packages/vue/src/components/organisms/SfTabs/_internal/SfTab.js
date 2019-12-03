import { Fragment } from "vue-fragment";

import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";

export default {
  name: "SfTab",
  data() {
    return {
      isActive: false
    };
  },
  components: {
    Fragment,
    SfChevron
  },
  props: {
    /**
     * Tab title.
     */
    title: {
      type: String,
      default: "MenuItem"
    }
  },
  methods: {
    tabClick() {
      this.$parent.$emit("toggle", this._uid);
    }
  }
};
