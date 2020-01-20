<template>
  <SfCheckbox
    class="sf-filter"
    :class="{ 'sf-filter--active': isSelected }"
    :name="label"
    :selected="selected"
    @change="$emit('change', !selected)"
  >
    <template #label>
      <div class="sf-filter__label">{{ label }}</div>
      <div class="sf-filter__count">{{ count }}</div>
    </template>
  </SfCheckbox>
</template>
<script>
import SfCheckbox from "../../atoms/SfCheckbox/SfCheckbox.vue";

export default {
  name: "SfFilter",
  components: {
    SfCheckbox
  },
  model: {
    prop: "selected"
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    count: {
      type: [String, Number],
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSelected() {
      return this.selected;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfFilter.scss";
</style>
