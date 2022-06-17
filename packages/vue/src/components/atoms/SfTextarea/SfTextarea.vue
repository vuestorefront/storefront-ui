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
      :readonly="props.readonly"
      v-on="$options.handleInput(listeners)"
    />
    <label class="sf-textarea__label" :for="props.name">
      <slot name="label" v-bind="{ props }">{{ props.label }}</slot>
    </label>
    <div class="sf-textarea__error-message">
      <transition name="sf-fade">
        <slot name="error-message" v-bind="{ props }">
          <div :class="{ 'display-none': props.valid }">
            {{ props.errorMessage }}
          </div>
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
    value: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    cols: {
      type: [String, Number],
      default: "20",
    },
    rows: {
      type: [String, Number],
      default: "",
    },
    maxlength: {
      type: [String, Number],
      default: null,
    },
    minlength: {
      type: [String, Number],
      default: null,
    },
    wrap: {
      type: String,
      default: "soft",
      validator: (value) => {
        return ["soft", "hard", "off"].includes(value);
      },
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
      description: "Native textarea required attribute",
    },
    placeholder: {
      type: String,
      default: "",
    },
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
