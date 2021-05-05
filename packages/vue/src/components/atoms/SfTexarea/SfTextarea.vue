<template functional>
  <div
    :class="[
      data.class,
      data.staticClass,
      'sf-textarea',
      {
        'sf-textarea--has-text': !!props.value,
        'sf-textarea--invalid': !props.valid,
      },
    ]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
  >
    <textarea
      :id="props.name"
      :value="props.value"
      :name="props.name"
      :placeholder="props.placeholder"
      :cols="props.cols"
      :rows="props.rows"
      :wrap="props.wrap"
      :disabled="props.disabled"
      :required="props.required"
      :maxlength="props.maxlength"
      :minlength="props.minlength"
      v-on="$options.handleInput(listeners)"
    />
    <label class="sf-textarea__label" :for="props.name">
      <!-- @slot Custom input label -->
      <slot name="label" v-bind="{ props }">{{ props.label }}</slot>
    </label>
    <div class="sf-textarea__error-message">
      <transition name="sf-fade">
        <!-- @slot Custom error message -->
        <slot v-if="!props.valid" name="error-message" v-bind="{ props }">
          <div>{{ props.errorMessage }}</div>
        </slot>
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
  handleInput(listeners) {
    return {
      ...listeners,
      input: ($event) =>
        listeners.input && listeners.input($event.target.value),
    };
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfTextarea.scss";
</style>
