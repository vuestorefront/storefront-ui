<template>
  <div
    class="sf-textarea"
    :class="{
      'sf-textarea--has-text': !!value,
      'sf-textarea--invalid': !valid,
    }"
  >
    <textarea
      :id="name"
      v-focus
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
      :wrap="wrap"
      :disabled="disabled"
      :required="required"
      :maxlength="maxlength"
      :minlength="minlength"
      v-on="listeners"
    />
    <label class="sf-textarea__label" :for="name">
      <!-- @slot Custom input label -->
      <slot name="label" v-bind="{ label }">{{ label }}</slot>
    </label>
    <div class="sf-textarea__error-message">
      <transition name="sf-fade">
        <!-- @slot Custom error message -->
        <slot v-if="!valid" name="error-message" v-bind="{ errorMessage }">
          <div>{{ errorMessage }}</div></slot
        >
      </transition>
    </div>
  </div>
</template>
<script>
import { focus } from "../../../utilities/directives";
export default {
  name: "SfTextarea",
  directives: {
    focus,
  },
  props: {
    /**
     * Current textarea value (`v-model`).
     */
    value: {
      type: [String, Number],
      default: "",
    },
    /**
     * Textarea label.
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Textarea name.
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * The visible width of the text control. It must be a positive integer.
     * If it is not specified, the default value is 20.
     */
    cols: {
      type: [String, Number],
      default: "20",
    },
    /**
     * The number of visible text lines for the control.
     */
    rows: {
      type: [String, Number],
      default: "",
    },
    /**
     * The maximum number of characters that the user can enter.
     * If this value isn't specified, the user can enter an unlimited number of characters.
     */
    maxlength: {
      type: [String, Number],
      default: "",
    },
    /**
     * The minimum number of characters required that the user should enter.
     */
    minlength: {
      type: [String, Number],
      default: "",
    },
    /**
     * Indicates how the control wraps text. Possible values are soft, hard, off.
     * Default value is soft.
     */
    wrap: {
      type: String,
      default: "soft",
      validator: (value) => {
        return ["soft", "hard", "off"].includes(value);
      },
    },
    /**
     *  With default false value the textarea is editable.
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * Validate value of textarea.
     */
    valid: {
      type: Boolean,
      default: true,
    },
    /**
     * Error message for textarea. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "",
    },
    /**
     * Native textarea required attribute.
     */
    required: {
      type: Boolean,
      default: false,
      description: "Native textarea required attribute",
    },
    /**
     * Placeholder for textarea.
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Native textarea disabled attribute.
     */
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute",
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfTextarea.scss";
</style>
