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
    header: {
      type: String,
      default: "MenuItem"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    tabClick() {
      this.$parent.$emit("toggle", this._uid);
    }
  },
  mounted() {
    if (this.active) {
      this.$parent.$emit("toggle", this._uid);
    }
  }
};
