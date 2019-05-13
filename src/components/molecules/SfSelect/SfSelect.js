import SfSelectOption from "@/components/molecules/SfSelect/_internal/SfSelectOption.vue";
import Vue from "vue";

Vue.component("SfSelectOption", SfSelectOption);
// FIXME: out data.hover
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
      index: null, // FIXME: REMOVE IT
      hover: null, // FIXME: REMOVE IT
      options: [] // FIXME: CHANGE DATA STRUTURE, 1ST MAP SLOTS TO OPTIONS
    };
  },
  methods: {
    // Use to fill options array
    getOptions(slots) {
      slots = slots.filter(slot => slot.tag);
      slots = slots.map(slot => ({ ...slot.componentOptions.propsData }));
      return slots;
    },
    getOptionHTML(slots, value) {
      const el = slots.find(
        item => item.tag && item.componentOptions.propsData.value === value
      );
      return el.elm.innerHTML;
    },
    // Update v-model and html in selected div
    update(value) {
      this.html = this.getOptionHTML(this.$slots.default, value);
      this.$emit("change", value);
    },
    // FIXME: how remove hover
    // FIXME: how remove index
    move(direction) {
      let index = this.index + direction;

      if (index < 0) index = 0;
      if (index >= this.options.length) index = this.options.length - 1;
      // if (this.index === index) return;

      this.index = index;
      this.update(this.options[index].value);
    },
    //FIXME: how remove hover
    enter() {
      this.toggle();
      // if (!this.hover) return;
      // this.update(this.hover);
      // this.hover = null;
    },
    toggle() {
      this.open = !this.open;
    },
    blurHander() {
      if (this.open) {
        this.toggle();
      }
    }
  },
  created: function() {
    this.options = this.getOptions(this.$slots.default);
    this.index = this.options.findIndex(option => {
      return option.value === this.selected;
    });
  },
  mounted: function() {
    // FIXME: it's still not the best solution. ..elm isn't mounted when use I v-if
    this.html = this.getOptionHTML(this.$slots.default, this.selected);
    this.$on("update", this.update);
  },
  beforeDestroy: function() {
    this.$off("update", this.update);
  }
};
