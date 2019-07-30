import { Fragment } from "vue-fragment";

import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";

export default {
  name: "Sftab",
  components: {
    Fragment,
    SfChevron
  },
  props: {
    tab: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    tabClick() {
      this.$emit("tabClick", this.index);
    }
  }
};
