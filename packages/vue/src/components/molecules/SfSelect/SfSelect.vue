<template>
  <div
    class="sf-select"
    :class="{
      'sf-select--is-selected': selectedValue || placeholder,
      'sf-select--is-required': required,
      'sf-select--is-disabled': disabled,
      'sf-select--is-invalid': !valid,
    }"
  >
    <label :for="label" class="sf-select__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <select
      :id="label"
      v-model="selectedValue"
      v-focus
      class="sf-select__dropdown"
      @change="$emit('selected', $event.target.value)"
    >
      <!-- empty option by default, may be used as placeholder -->
      <option
        class="sf-select__placeholder sf-select__option"
        disabled
        selected
        value
      >
        <slot name="placeholder" v-bind="{ placeholder }" />
        {{ placeholder }}
      </option>
      <slot />
    </select>
    <div class="sf-select__error-message">
      <transition name="sf-fade">
        <!-- @slot Custom error message of form select -->
        <slot v-if="!valid" name="errorMessage" v-bind="{ errorMessage }">
          <span> {{ errorMessage }} </span>
        </slot>
      </transition>
    </div>
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
     * Adds placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedValue: "",
    };
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSelect.scss";
</style>
