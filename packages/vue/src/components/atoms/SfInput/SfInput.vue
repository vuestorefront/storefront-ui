<template>
  <div
    class="sf-input"
    :class="{
      'sf-input--has-text': !!value,
      'sf-input--invalid': !valid,
    }"
  >
    <div class="sf-input__wrapper">
      <input
        :id="name"
        v-focus
        v-bind="$attrs"
        :value="value"
        :required="required"
        :disabled="disabled"
        :name="name"
        :class="{ 'sf-input--is-password': isPassword }"
        :type="inputType"
        v-on="listeners"
      />
      <span class="sf-input__bar"></span>
      <label
        class="sf-input__label"
        :for="name"
        :class="{ 'sf-input__label--has-icon': hasIcon }"
      >
        <!-- @slot Custom input label -->
        <slot name="label" v-bind="{ label }">{{ label }}</slot>
      </label>
      <slot
        v-bind="{
          isPasswordVisible,
          switchVisibilityPassword,
        }"
        name="computedIconSlotName"
      >
        <SfButton
          v-if="isPassword"
          class="sf-input__password-button"
          type="button"
          aria-label="switch-visibility-password"
          :aria-pressed="isPasswordVisible.toString()"
          @click="switchVisibilityPassword"
        >
          <SfIcon
            class="sf-input__password-icon"
            :class="{
              'sf-input__password-icon--hidden': !isPasswordVisible,
            }"
            icon="show_password"
          />
        </SfButton>
        <SfIcon
          v-if="hasIcon"
          class="sf-input__icon"
          :icon="icon"
          :color="colorIcon"
          :size="sizeIcon"
        />
      </slot>
    </div>
    <div class="sf-input__message">
      <transition name="sf-fade">
        <!-- @slot Custom message of form input -->
        <slot :name="computedMessageSlotName" v-bind="{ computedMessage }">
          <div :class="computedMessageClass">{{ computedMessage }}</div></slot
        >
      </transition>
    </div>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import { focus } from "../../../utilities/directives";
export default {
  name: "SfInput",
  directives: {
    focus,
  },
  components: { SfIcon, SfButton },
  inheritAttrs: false,
  props: {
    /**
     * Current input value (`v-model`)
     */
    value: {
      type: [String, Number],
      default: "",
    },
    /**
     * Form input label
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Form input name
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * Form input type
     */
    type: {
      type: String,
      default: "text",
    },
    /**
     * Validate value of form input
     */
    valid: {
      type: Boolean,
      default: true,
    },
    /**
     * Error message value of form input. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "",
    },
    /**
     * Success message value of form input.
     */
    successMessage: {
      type: String,
      default: "",
    },
    /**
     * Native input required attribute
     */
    required: {
      type: Boolean,
      default: true,
      description: "Native input required attribute",
    },
    /**
     * Hint/Required message value of form input.
     */
    hintMessage: {
      type: String,
      default: "Required.",
    },
    /**
     * Native input disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute",
    },
    /**
     * Status of show password icon display
     */
    hasShowPassword: {
      type: Boolean,
      default: false,
    },
    /**
     * Status and properties of icon display
     */
    hasIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    colorIcon: {
      type: String,
      default: "",
    },
    sizeIcon: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isPasswordVisible: false,
      inputType: "",
      isNumberTypeSafari: false,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
    isPassword() {
      return this.type === "password" && this.hasShowPassword;
    },
    computedMessageSlotName() {
      if (this.errorMessage && !this.valid) {
        return "show-errorMessage";
      } else if (this.successMessage && this.valid) {
        return "show-successMessage";
      } else if (this.hintMessage) {
        return this.required ? "show-hintMessage" : "";
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
    computedIconSlotName() {
      if (this.hasShowPassword) {
        return this.hasIcon
          ? "show-password-button-and-icon"
          : "show-password-button";
      } else if (this.hasIcon) {
        return "show-icon";
      } else {
        return "";
      }
    },
  },
  watch: {
    type: {
      immediate: true,
      handler: function (type) {
        let inputType = type;
        // Safari has bug for number input
        if (typeof window !== "undefined" || typeof document !== "undefined") {
          const ua = navigator.userAgent.toLocaleLowerCase();
          if (
            ua.indexOf("safari") !== -1 &&
            ua.indexOf("chrome") === -1 &&
            type === "number"
          ) {
            this.isNumberTypeSafari = true;
            inputType = "text";
          }
        }
        this.inputType = inputType;
      },
    },
    value: {
      immediate: true,
      handler: function (value) {
        if (!this.isNumberTypeSafari) return;
        if (isNaN(value)) {
          this.$emit("input");
        }
      },
    },
  },
  methods: {
    switchVisibilityPassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfInput.scss";
</style>
