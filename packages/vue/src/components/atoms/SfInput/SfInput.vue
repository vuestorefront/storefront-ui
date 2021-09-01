<template>
  <div
    class="sf-input"
    :class="{
      'has-text': !!modelValue,
      invalid: !valid,
    }"
    :data-testid="name"
  >
    <div class="sf-input__wrapper">
      <input
        :id="name"
        v-focus
        :value="modelValue"
        v-bind="$attrs"
        :required="required"
        :disabled="disabled"
        :name="name"
        :class="{ 'sf-input--is-password': isPassword }"
        :type="inputType"
        @input="updateValue"
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
              hidden: !isPasswordVisible,
            }"
            icon="show_password"
            size="1.5rem"
          ></SfIcon>
        </SfButton>
      </slot>
    </div>
    <div class="sf-input__error-message">
      <transition name="sf-fade">
        <!-- @slot Custom error message of form input -->
        <slot v-if="!valid" name="error-message" v-bind="{ errorMessage }">
          <div>{{ errorMessage }}</div></slot
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
  compatConfig: {
    MODE: 3, //temporary and to be removed on removal of @vue/compat
  },
  directives: {
    focus,
  },
  components: { SfIcon, SfButton },
  inheritAttrs: false,
  props: {
    /**
     * Current input modelValue (`v-model`)
     */
    modelValue: {
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
     * Native input required attribute
     */
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute",
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
  },
  data() {
    return {
      isPasswordVisible: false,
      inputType: "",
      isNumberTypeSafari: false,
    };
  },
  computed: {
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
    modelValue: {
      immediate: true,
      handler: function (value) {
        if (!this.isNumberTypeSafari) return;
        if (isNaN(value)) {
          this.$emit("update:modelValue");
        }
      },
    },
  },
  methods: {
    switchVisibilityPassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
    },
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfInput.scss";
</style>
