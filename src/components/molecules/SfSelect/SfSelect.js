import SfSelectOption from "@/components/molecules/SfSelect/_internal/SfSelectOption.vue";
import Vue from "vue";

Vue.component("SfSelectOption", SfSelectOption);
export default {
  name: "SfSelect",
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    selected: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      html: "",
      open: false
    };
  },
  watch: {
    selected() {
      this.open = false;
    }
  },
  methods: {
    clicked(event) {
      this.open = !this.open;
    }
  },
  mounted: function() {
    const el = this.$slots.default.find(el => {
      if (!el.tag) return;
      return el.componentOptions.propsData.value === this.selected;
    });
    this.html = el.elm.innerHTML;
  }
};
