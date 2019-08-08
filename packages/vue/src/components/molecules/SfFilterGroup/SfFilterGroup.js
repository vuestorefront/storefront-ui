import Vue from "vue";
import SfFilterItem from "./_internal/SfFilterItem.vue";

Vue.component("SfFilterItem", SfFilterItem);

export default {
  props: {
    selected: {
      type: [String, Array],
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: true
    }
  },
  model: {
    event: "change",
    prop: "selected"
  },
  methods: {
    getSelected: function() {
      return this.selected;
    },
    updateSelected: function(data) {
      this.$emit("change", data);
    },
    isMultiple: function() {
      return this.multiple;
    }
  },
  watch: {
    selected: function (val) {
      // dirty hack because updateSelected is not always called
      this.$emit("change", val);
    }
  },
  provide() {
    return {
      getSelected: this.getSelected,
      updateSelected: this.updateSelected,
      isMultiple: this.isMultiple
    };
  }
};
