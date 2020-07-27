<template>
  <div
    class="sf-select"
    :class="{
      'sf-select--is-selected': selected || placeholder,
      'sf-select--is-required': required,
      'sf-select--is-disabled': disabled,
    }"
  >
    <label :for="label" class="sf-select__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <select :id="label" v-model="selected" v-focus class="sf-select__dropdown">
      <!-- empty option by default, may be used as placeholder -->
      <option
        class="sf-select__placeholder sf-select__option"
        disabled
        selected
        value
        ><slot name="placeholder" :placeholder="placeholder" />{{
          placeholder
        }}</option
      >
      <slot />
    </select>
  </div>
</template>
<script>
import { focus } from "../../../utilities/directives";
import SfSelectOption from "./_internal/SfSelectOption.vue";
import Vue from "vue";
Vue.component("SfSelectOption", SfSelectOption);
export default {
  name: "SfSelect",
  directives: { focus },
  props: {
    /**
     * Select field label
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Selected item value
     */
    selected: {
      type: [String, Number, Object],
      default: "",
    },
    /**
     * Required attribute
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Validate value of form select
     */
    valid: {
      type: Boolean,
      default: true,
    },
    /**
     * Disabled status of form select
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Adds placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
  },
  computed: {
    isSelected() {
      return this.selected;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSelect.scss";
</style>
