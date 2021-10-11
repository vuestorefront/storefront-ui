<template>
  <div
    class="sf-checkbox"
    :class="{
      'is-active': isChecked,
      'is-disabled': disabled,
      'has-error': !valid,
      'is-required': required,
    }"
    :data-testid="name"
  >
    <label class="sf-checkbox__container">
      <input
        v-focus
        type="checkbox"
        :name="name"
        :value="value"
        :checked="isChecked"
        :disabled="disabled"
        class="sf-checkbox__input"
        @change="inputHandler"
      />
      <!-- @slot Custom check mark markup -->
      <slot name="checkmark" v-bind="{ isChecked, disabled }">
        <div
          class="sf-checkbox__checkmark"
          :class="{ 'sf-checkbox__checkmark is-active': isChecked }"
        >
          <SfIcon v-if="isChecked" icon="check" color="white" />
        </div>
      </slot>
      <!-- @slot Custom label markup -->
      <slot name="label" v-bind="{ label, isChecked, disabled }">
        <div v-if="label" class="sf-checkbox__label">{{ label }}</div>
      </slot>
    </label>
    <div class="sf-checkbox__message">
      <transition name="sf-fade">
        <!-- @slot Custom message of form input -->
        <slot
          v-if="!disabled"
          :name="computedMessageSlotName"
          v-bind="{ computedMessage }"
        >
          <div :class="computedMessageClass">{{ computedMessage }}</div></slot
        >
      </transition>
    </div>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon";
import { focus } from "../../../utilities/directives";
export default {
  name: "SfCheckbox",
  directives: {
    focus,
  },
  components: {
    SfIcon,
  },
  model: {
    prop: "selected",
    event: "change",
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Boolean],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    /**
     *  Hint/Required message value of checkbox.
     */
    hintMessage: {
      type: String,
      default: "Required.",
    },
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Info/success message value of select.
     */
    infoMessage: {
      type: String,
      default: "",
    },
    /**
     * Error message value of select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct.",
    },
    valid: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: [Array, Boolean],
      default: () => [],
    },
  },
  computed: {
    isChecked() {
      if (typeof this.selected === "boolean") {
        return this.selected;
      } else {
        return this.selected.includes(this.value);
      }
    },
    computedMessageSlotName() {
      return this.messagesHandler(
        "show-error-message",
        "show-info-message",
        this.required ? "show-hint-message" : ""
      );
    },
    computedMessage() {
      return this.messagesHandler(
        this.errorMessage,
        this.infoMessage,
        this.required ? this.hintMessage : ""
      );
    },
    computedMessageClass() {
      return this.messagesHandler(
        "sf-checkbox__message--error",
        "sf-checkbox__message--info",
        this.required ? "sf-checkbox__message--hint" : ""
      );
    },
  },
  methods: {
    inputHandler() {
      if (typeof this.selected === "boolean") {
        this.$emit("change", !this.selected);
      } else {
        let selected = [...this.selected];
        if (selected.includes(this.value)) {
          selected = selected.filter((value) => value !== this.value);
        } else {
          selected.push(this.value);
        }
        this.$emit("change", selected);
      }
    },
    messagesHandler(error, info, hint) {
      if (this.errorMessage && !this.valid) {
        return error;
      } else if (this.infoMessage && this.valid) {
        return info;
      } else if (this.hintMessage) {
        return hint;
      } else {
        return "";
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCheckbox.scss";
</style>
