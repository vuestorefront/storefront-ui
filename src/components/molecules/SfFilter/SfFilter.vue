<template>
  <div class="sf-filter">
    <slot />
  </div>
</template>

<script>
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
    getSelected: function() {
      return this.selected;
    },
    updateSelected: function(data) {
      this.$emit("update:selected", data);
    }
  },
  provide() {
    return {
      getSelected: this.getSelected,
      updateSelected: this.updateSelected
    };
  }
};
</script>
