import SfSelectOption from "./_internal/SfSelectOption.vue";
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
      open: false,
      index: -1,
      options: [],
      indexes: {}
    };
  },
  watch: {
    index(index) {
      this.$emit("change", this.options[index].value);
    }
  },
  computed: {
    html() {
      if (this.index < 0) return;
      return this.options[this.index].html;
    }
  },
  methods: {
    update(index) {
      this.index = index;
    },
    move(payload) {
      const optionsLength = this.options.length;
      let index = this.index;
      index += payload;

      if (index < 0) index = 0;
      if (index >= optionsLength) index = optionsLength - 1;

      this.index = index;
    },
    enter() {
      this.toggle();
    },
    toggle() {
      this.open = !this.open;
    },
    openHandler() {
      if (!this.open) {
        this.toggle();
      }
    },
    closeHandler() {
      if (this.open) {
        this.toggle();
      }
    }
  },
  created: function() {},
  mounted: function() {
    const selected = this.selected,
      options = [],
      indexes = {};
    let i = 0;
    if (!this.$slots.length) return;
    this.$on("update", this.update);

    this.$slots.default.forEach(slot => {
      if (!slot.tag) return;
      options.push({
        ...slot.componentOptions.propsData,
        html: slot.elm.innerHTML
      });
      indexes[slot.componentOptions.propsData.value] = i;
      i++;
    });

    this.options = options;
    this.indexes = indexes;
    this.index = indexes[selected];
  },
  beforeDestroy: function() {
    this.$off("update", this.update);
  }
};
