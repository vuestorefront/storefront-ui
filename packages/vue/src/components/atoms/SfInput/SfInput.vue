<template>
  <div
    class="sf-input"
    :class="{
      'sf-input--has-text': !!value,
      'sf-input--invalid': valid === false
    }"
  >
    <div style="position: relative; height: 100%">
      <input
        :id="name"
        v-bind="$attrs"
        :value="value"
        :required="required"
        :disabled="disabled"
        :name="name"
        v-on="listeners"
      />
      <span class="sf-input__bar"></span>
      <label class="sf-input__label" :for="name">
        <!-- @slot Custom input label -->
        <slot name="label" v-bind="{ label }">{{ label }}</slot>
      </label>
    </div>
    <div v-if="valid !== undefined" class="sf-input__error-message">
      <transition name="fade">
        <span v-if="!valid">
          <!-- @slot Custom error message of form input -->
          <slot name="errorMessage" v-bind="{ errorMessage }">{{
            errorMessage
          }}</slot>
        </span>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "SfInput",
  props: {
    /**
     * Current input value (`v-model`)
     */
    value: {
      type: [String, Number],
      default: null
    },
    /**
     * Form input label
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Form input name
     */
    name: {
      type: String,
      default: null
    },
    /**
     * Validate value of form input
     */
    valid: {
      type: Boolean,
      default: undefined
    },
    /**
     * Error message value of form input. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * Native input required attribute
     */
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute"
    },
    /**
     * Native input disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute"
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfInput.scss";
</style>
