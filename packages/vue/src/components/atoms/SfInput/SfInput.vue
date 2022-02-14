<template>
  <div
    v-will-change="'font-size'"
    class="sf-input"
    :class="{
      'has-text': !!value,
      invalid: !valid,
    }"
    :data-testid="dataTestDisplay('name')"
  >
    <div class="sf-input__wrapper">
      <input
        :id="idWithoutWhitespace"
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
        :class="{ 'display-none': !label }"
        class="sf-input__label will-change"
        :for="name"
      >
        <slot name="label" v-bind="{ label }">{{ label }}</slot>
      </label>
      <slot
        v-bind="{
          icon,
          isPasswordVisible,
          switchVisibilityPassword,
        }"
        name="icon"
      >
        <SfButton
          v-if="icon"
          class="sf-input__button sf-button--pure"
          @click="$emit('click:icon')"
        >
          <SfIcon
            :color="icon.color"
            :size="icon.size"
            :icon="icon.icon"
            class="sf-input__icon"
          >
          </SfIcon>
        </SfButton>
        <SfButton
          v-else-if="hasShowPassword"
          :class="{ 'display-none': !isPassword }"
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
        <slot name="error-message" v-bind="{ errorMessage }">
          <div :class="{ 'display-none': valid }">{{ errorMessage }}</div></slot
        >
      </transition>
    </div>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import { focus } from "../../../utilities/directives";
import { willChange } from "../../../utilities/directives";
import { dataTestDisplay } from "../../../utilities/helpers";

export default {
  name: "SfInput",
  directives: {
    focus,
    willChange,
  },
  components: { SfIcon, SfButton },
  inheritAttrs: false,
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
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: Object,
      default: () => {},
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
      description: "Native input required attribute",
    },
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute",
    },
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
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
    isPassword() {
      return this.type === "password" && this.hasShowPassword;
    },
    idWithoutWhitespace() {
      return this.name.replace(/\s/g, "");
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
      if (this.type !== "password") return;
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
    },
    dataTestDisplay,
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfInput.scss";
</style>
