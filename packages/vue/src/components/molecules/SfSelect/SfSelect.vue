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
      <option class="sf-select__placeholder sf-select__option" disabled
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
     * Hint/Required message value of select.
     */
    hintMessage: {
      type: String,
      default: "Required.",
    },
    /**
     * Validate value of select
     */
    valid: {
      type: Boolean,
      default: true,
    },
    /**
     * Error message value of select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct.",
    },
    /**
     * Info/success message value of select.
     */
    infoMessage: {
      type: String,
      default: "",
    },
    /**
     * Disabled status of form select.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Adds placeholder.
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
      return this.messagesHandler(
        "show-error-message",
        "show-info-message",
        this.required ? "show-hint-message" : ""
      );
    },
    computedMessage() {
      return this.messagesHandler(
        this.errorMessage,
        this.infoMessage,
        this.required ? this.hintMessage : ""
      );
    },
    computedMessageClass() {
      return this.messagesHandler(
        "sf-input__message--error",
        "sf-input__message--info",
        this.required ? "sf-input__message--hint" : ""
      );
    },
  },
  methods: {
    messagesHandler(error, info, hint) {
      if (this.errorMessage && !this.valid) {
        return error;
      } else if (this.infoMessage && this.valid) {
        return info;
      } else if (this.hintMessage) {
        return hint;
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
