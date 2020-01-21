<template>
  <SfCheckbox
    class="sf-filter"
    :class="{ 'sf-filter--active': isSelected }"
    :name="label"
    :selected="selected"
    v-on="$listeners"
  >
    <template #label>
      <slot name="label" v-bind="{ label }">
        <div class="sf-filter__label">{{ label }}</div>
      </slot>
      <slot name="count" v-bind="{ count }">
        <div class="sf-filter__count">{{ count }}</div>
      </slot>
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
