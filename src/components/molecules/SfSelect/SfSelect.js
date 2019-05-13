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
      options: []
    };
  },
  watch: {
    selected() {
      // this.open = false;
    }
  },
  methods: {
    echo() {
      console.log("echo");
    },
    blured(event) {
      this.open = false;
    },
    clicked(event) {
      this.open = !this.open;
      // this.$refs.selector.focus();
    },
    changed(event) {
      const value = event.target.value;
      // this.$emit("change", value);
      // FIXME: hack, dopiero po created jest elm
      // const element = this.$slots.default.find(el => {
      //   if (!el.tag) return;
      //   return el.componentOptions.propsData.value === this.selected;
      // });
      // this.html = element.elm.innerHTML;
    }
  },
  created: function() {
    this.$slots.default.forEach(slot => {
      if (!slot.tag) return;
      this.options.push(slot.componentOptions.propsData);
    });
    this.$on("echo", function(value) {
      const element = this.$slots.default.find(el => {
        if (!el.tag) return;
        return el.componentOptions.propsData.value === value;
      });
      this.html = element.elm.innerHTML;
      this.$emit("change", value);
    });
  },
  mounted: function() {
    const element = this.$slots.default.find(el => {
      if (!el.tag) return;
      return el.componentOptions.propsData.value === this.selected;
    });
    this.html = element.elm.innerHTML;
  }
};
