<template>
  <div
    v-will-change="'font-size'"
    class="sf-select"
    :class="{
      'is-selected': value || placeholder,
      'is-required': required,
      'is-disabled': disabled,
      'is-invalid': !valid,
    }"
  >
    <label :for="label" class="sf-select__label will-change">
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
      :aria-invalid="!valid"
      :aria-required="required"
      :aria-describedby="errorMessage ? `${label}-error` : null"
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
        :label="placeholder"
      >
        <slot name="placeholder" v-bind="{ placeholder }" />
        {{ placeholder }}
      </option>
      <slot />
    </select>
    <div class="sf-select__error-message">
      <transition name="sf-fade">
        <!-- @slot Custom error message of form select -->
        <slot name="errorMessage" v-bind="{ errorMessage }">
          <span
            :id="`${label}-error`"
            :class="{ 'display-none': valid }"
            aria-live="assertive"
          >
            {{ errorMessage }}
          </span>
        </slot>
      </transition>
    </div>
  </div>
</template>
<script>
import { focus } from "../../../utilities/directives";
import { willChange } from "../../../utilities/directives";
import SfSelectOption from "./_internal/SfSelectOption.vue";
import Vue from "vue";

Vue.component("SfSelectOption", SfSelectOption);
export default {
  name: "SfSelect",
  directives: { focus, willChange },
  props: {
    label: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "This field is not correct.",
    },
    value: {
      type: String,
      default: "",
    },
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
