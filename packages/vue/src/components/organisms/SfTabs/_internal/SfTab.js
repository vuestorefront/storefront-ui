import { Fragment } from "vue-fragment";

import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";

export default {
  name: "Sftab",
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
     * Tab header.
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
