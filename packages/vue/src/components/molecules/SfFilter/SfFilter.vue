<template>
  <div class="sf-filter" :class="{ 'sf-filter--active': isSelected }">
    <!-- @slot  -->
    <slot name="label" v-bind="{ label }">
      <SfCheckbox
        class="sf-filter__checkbox"
        :class="{ 'sf-filter--active': isSelected }"
        :name="label"
        :label="label"
        :selected="selected"
        @input="$emit('input', !selected)"
      />
    </slot>
    <slot name="count" v-bind="{ count }">
      <div class="sf-filter__count">{{ count }}</div>
    </slot>
  </div>
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
