// @vue/component
import { Fragment } from "vue-fragment";

import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";

export default {
  name: "SfTab",
  data() {
    return {
      isActive: false,
      desktopMin: 1024
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
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth
      );
      if (this.isActive && width > this.desktopMin) return;
      this.$parent.$emit("toggle", this._uid);
    }
  }
};
