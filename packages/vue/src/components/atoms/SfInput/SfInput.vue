<template>
  <div
    class="sf-input"
    :class="{
      'sf-input--has-text': !!value,
      'sf-input--invalid': valid === false
    }"
  >
    <div class="sf-input__wrapper">
      <input
        :id="name"
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
          switchVisibilityPassword
        }"
        name="show-password"
      >
        <SfButton
          aria-label="switch-visibility-password"
          :aria-pressed="isPasswordVisible.toString()"
          class="sf-input__password-button"
          @click="switchVisibilityPassword"
        >
          <SfIcon
            class="sf-input__password-icon"
            :class="{
              'sf-input__password-icon--hidden': !isPasswordVisible
            }"
            icon="show_password"
            size="xs"
            :color="isPasswordVisible ? 'gray-primary' : 'gray-secondary'"
          ></SfIcon>
        </SfButton>
      </slot>
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
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfInput",
  components: { SfIcon, SfButton },
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
     * Form input type
     */
    type: {
      type: String,
      default: "text"
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
    },
    hasShowPassword: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isPasswordVisible: false,
      inputType: ""
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    },
    isPassword() {
      return this.type === "password" && this.hasShowPassword;
    }
  },
  watch: {
    type: {
      immediate: true,
      handler: function(value) {
        this.inputType = value;
      }
    }
  },
  methods: {
    switchVisibilityPassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfInput.scss";
</style>
