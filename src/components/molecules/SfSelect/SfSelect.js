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
      open: false,
      index: null,
      hover: null,
      options: []
    };
  },
  methods: {
    toggle(e) {
      this.open = !this.open;
    },
    moveUp() {
      if (this.hover) {
        this.index =
          this.options.findIndex(option => {
            return option.value === this.hover;
          }) - 1;
        this.hover = null;
      } else {
        this.index = this.index - 1 >= 0 ? this.index - 1 : this.index;
      }
      this.$emit("update", this.options[this.index].value);
    },
    moveDown() {
      if (this.hover) {
        this.index =
          this.options.findIndex(option => {
            return option.value === this.hover;
          }) + 1;
        this.hover = null;
      } else {
        this.index =
          this.index + 1 < this.options.length ? this.index + 1 : this.index;
      }
      this.$emit("update", this.options[this.index].value);
    },
    blurHander() {
      if (this.open) {
        this.toggle();
      }
    }
  },
  created: function() {
    this.$slots.default.forEach((slot, index) => {
      if (!slot.tag) return;
      this.options.push(slot.componentOptions.propsData);
    });

    this.index = this.options.findIndex(option => {
      return option.value === this.selected;
    });
  },
  beforeDestroy: function() {
    this.$off("update");
  },
  mounted: function() {
    const element = this.$slots.default.find(el => {
      if (!el.tag) return;
      return el.componentOptions.propsData.value === this.selected;
    });
    this.html = element.elm.innerHTML;
    this.$on("update", function(value) {
      const element = this.$slots.default.find(el => {
        if (!el.tag) return;
        return el.componentOptions.propsData.value === value;
      });
      this.html = element.elm.innerHTML;
      this.$emit("change", value);
    });
  }
};
