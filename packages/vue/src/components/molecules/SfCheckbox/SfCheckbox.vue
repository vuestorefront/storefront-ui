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
        :aria-invalid="!valid"
        :aria-required="required"
        @change="inputHandler"
      />
      <slot name="checkmark" v-bind="{ isChecked, disabled }">
        <span
          class="sf-checkbox__checkmark"
          :class="{ 'sf-checkbox__checkmark is-active': isChecked }"
        >
          <SfIcon
            :class="{ 'display-none': !isChecked }"
            icon="check"
            color="white"
          />
        </span>
      </slot>
      <slot name="label" v-bind="{ label, isChecked, disabled }">
        <span :class="{ 'display-none': !label }" class="sf-checkbox__label">{{
          label
        }}</span>
      </slot>
    </label>
    <div class="sf-checkbox__message">
      <transition name="sf-fade">
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
    hintMessage: {
      type: String,
      default: "Required.",
    },
    required: {
      type: Boolean,
      default: false,
    },
    infoMessage: {
      type: String,
      default: "",
    },
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
