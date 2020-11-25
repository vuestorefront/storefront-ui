<template>
  <SfCheckbox
    class="sf-filter"
    :class="{ 'is-active': selected, 'is-color': color }"
    :name="label"
    :selected="selected"
    v-on="$listeners"
  >
    <template #label>
      <slot name="color" v-bind="{ color, selected }">
        <SfColor
          v-if="color"
          :color="color"
          :has-badge="false"
          :selected="selected"
          class="sf-filter__color"
          @click="$emit('change', !selected)"
        />
      </slot>
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
import SfCheckbox from "../../molecules/SfCheckbox/SfCheckbox.vue";
import SfColor from "../../atoms/SfColor/SfColor.vue";
export default {
  name: "SfFilter",
  components: {
    SfCheckbox,
    SfColor,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    count: {
      type: [String, Number],
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfFilter.scss";
</style>
