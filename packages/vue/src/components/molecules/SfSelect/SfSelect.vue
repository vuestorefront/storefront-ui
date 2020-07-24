<template>
  <div class="sf-select" :class="{ 'sf-select--is-selected': selected }">
    <label :for="label" class="sf-select__label">{{ label }}</label>
    <select
      :id="label"
      v-model="selected"
      class="sf-select__dropdown"
      :multiple="multiple"
    >
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
// import { focus } from "../../../utilities/directives";
import { clickOutside } from "../../../utilities/directives";
import SfSelectOption from "./_internal/SfSelectOption.vue";
import Vue from "vue";
Vue.component("SfSelectOption", SfSelectOption);
export default {
  name: "SfSelect",
  // directives: { focus, clickOutside },
  components: {},
  // model: {
  //   prop: "selected",
  //   event: "change",
  // },
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
     * Dropdown list size
     */
    size: {
      type: Number,
      default: 5,
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
     * Error message value of form select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct.",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
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
