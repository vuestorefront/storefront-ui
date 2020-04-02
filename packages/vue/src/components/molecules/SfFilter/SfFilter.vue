<template>
  <div :class="{ 'sf-filter--is-color': color }">
    <SfColor v-if="color" :color="color" :has-badge="false" />
    <SfCheckbox
      class="sf-filter"
      :class="{ 'sf-filter--active': isSelected, 'mobile-only': color }"
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
  </div>
</template>
<script>
import SfCheckbox from "../../atoms/SfCheckbox/SfCheckbox.vue";
import SfColor from "../../atoms/SfColor/SfColor.vue";

export default {
  name: "SfFilter",
  components: {
    SfCheckbox,
    SfColor
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
    },
    color: {
      type: String,
      default: ""
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
@import "~@storefront-ui/shared/styles/components/molecules/SfFilter.scss";
</style>
