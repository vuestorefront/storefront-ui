<template>
  <div class="sf-select">
    <label class="sf-select__label"></label>
    <select v-focus>
      <transition name="sf-fade">
        <option class="sf-select-option">
          <slot />
        </option>
      </transition>
    </select>
  </div>
</template>
<script>
import { focus } from "../../../utilities/directives";
import { clickOutside } from "../../../utilities/directives";
export default {
  name: "SfSelect",
  directives: { focus, clickOutside },
  components: {},
  model: {
    prop: "selected",
    event: "change",
  },
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
    /**
     * If true clicking outside will not dismiss the select
     */
    persistent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: false,
      options: [],
      indexes: {},
      optionHeight: 0,
      focusedOption: "",
    };
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSelect.scss";
</style>
