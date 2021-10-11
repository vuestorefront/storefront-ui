<template>
  <div
    class="sf-select"
    :class="{
      'is-selected': value || placeholder,
      'is-required': required,
      'is-disabled': disabled,
      'is-invalid': !valid,
    }"
  >
    <label :for="label" class="sf-select__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <select
      :id="label"
      v-focus
      v-bind="$attrs"
      :value="value"
      :disabled="disabled"
      class="sf-select__dropdown"
      @change="changeHandler"
    >
      <!-- empty option by default, may be used as placeholder -->
      <option
        v-if="placeholder"
        class="sf-select__placeholder sf-select__option"
        disabled
        :selected="!!placeholder"
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
     * Value selected.
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * Adds placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeHandler(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSelect.scss";
</style>
