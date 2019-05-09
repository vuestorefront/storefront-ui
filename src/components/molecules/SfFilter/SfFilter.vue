<template>
  <div class="sf-filter">
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'
import SfFilterItem from "@/components/molecules/SfFilter/_internal/SfFilterItem.vue";

Vue.component('SfFilterItem', SfFilterItem)

export default {
  props: {
    selected: {
      type: String | Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: true
    }
  },
  model: {
    event: "update:selected",
    prop: "selected"
  },
  methods: {
    getSelected: function () {
      return this.selected;
    },
    updateSelected: function(data) {
      this.$emit("update:selected", data);
    },
    isMultiple: function () {
      return this.multiple;
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
</script>
