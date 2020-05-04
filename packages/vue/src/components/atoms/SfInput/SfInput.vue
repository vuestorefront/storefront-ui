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
      <label class="sf-input__label" :for="name">
        <!-- @slot Custom input label -->
        <slot name="label" v-bind="{ label }">{{ label }}</slot>
      </label>
      <slot
        v-if="isPassword"
        v-bind="{
          isPasswordVisible,
          switchVisibilityPassword,
        }"
        name="show-password"
      >
        <SfButton
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
          ></SfIcon>
        </SfButton>
      </slot>
      <slot
        v-if="!(hasShowPassword && type === 'password')"
        name="icon"
        v-bind="{ colorIcon, icon }"
      >
        <SfIcon
          v-if="hasIcon"
          class="sf-input__icon"
          :color="colorIcon"
          :icon="icon"
        />
      </slot>
    </div>
    <div v-if="helperText" class="sf-input__helper-text">
      <transition name="fade">
        <!-- @slot Custom error message of form input -->
        <slot name="helper-text" v-bind="{ helperText }">
          <span>{{ helperText }}</span></slot
        >
      </transition>
    </div>
    <div class="sf-input__error-message">
      <transition name="fade">
        <!-- @slot Custom required message of form input -->
        <slot name="required-message" v-bind="{ requiredMessage }">
          <span v-if="required" class="sf-input__error-message--required"
            >{{ requiredMessage }}
          </span></slot
        >
      </transition>
      <transition name="fade">
        <!-- @slot Custom error message of form input -->
        <slot name="error-message" v-bind="{ errorMessage }">
          <span v-if="!valid">{{ errorMessage }}</span>
        </slot>
      </transition>
    </div>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import { focus } from "../../../utilities/directives/focus-directive.js";
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
      default: null,
    },
    /**
     * Form input label
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * Form input name
     */
    name: {
      type: String,
      default: null,
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
      default: null,
    },
    /**
     * Native input required attribute
     */
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute",
    },
    /**
     * Required message value of form input. It will be appeared if `required` is `true`.
     */
    requiredMessage: {
      type: String,
      default: null,
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
    /**
     * helper value of form input.
     */
    helperText: {
      type: String,
      default: null,
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
