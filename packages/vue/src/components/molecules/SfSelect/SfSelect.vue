<template>
  <div
    class="sf-select"
    :class="{
      'sf-select--is-selected': selected || placeholder,
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
    <div class="sf-component-select__error-message">
      <transition name="sf-fade">
        <!-- @slot Custom message of form input -->
        <slot
          v-if="!disabled"
          :name="computedMessageSlotName"
          v-bind="{ computedMessage }"
        >
          <div :class="computedMessageClass">{{ computedMessage }}</div></slot
        >
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
     * Error message value of form select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct.",
    },
    /**
<<<<<<< HEAD
     * Hint/Required message value of form select.
     */
    hintMessage: {
      type: String,
      default: "Required.",
    },
    /**
     * Success message value of form select.
     */
    successMessage: {
      type: String,
      default: "",
    },
    /**
     * If true clicking outside will not dismiss the select
=======
     * Adds placeholder
>>>>>>> a870f25e46ba3cf7f1488fae044ef4bfc45e2aba
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
    computedMessageSlotName() {
      if (this.errorMessage && !this.valid) {
        return "show-error-message";
      } else if (this.successMessage && this.valid) {
        return "show-success-message";
      } else if (this.hintMessage) {
        return this.required ? "show-hint-message" : "";
      } else {
        return "";
      }
    },
    computedMessage() {
      if (this.errorMessage && !this.valid) {
        return this.errorMessage;
      } else if (this.successMessage && this.valid) {
        return this.successMessage;
      } else if (this.hintMessage) {
        return this.required ? this.hintMessage : "";
      } else {
        return "";
      }
    },
    computedMessageClass() {
      if (this.errorMessage && !this.valid) {
        return "sf-input__message--error";
      } else if (this.successMessage && this.valid) {
        return "sf-input__message--success";
      } else if (this.hintMessage) {
        return this.required ? "sf-input__message--hint" : "";
      } else {
        return "";
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSelect.scss";
</style>
