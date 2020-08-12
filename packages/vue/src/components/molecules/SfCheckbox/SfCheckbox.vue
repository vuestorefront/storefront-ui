<template>
  <div
    class="sf-checkbox"
    :class="{
      'sf-checkbox--is-active': isChecked,
      'sf-checkbox--is-disabled': disabled,
      'sf-checkbox--has-error': !valid,
    }"
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
          :class="{ 'sf-checkbox__checkmark--is-active': isChecked }"
        >
          <SfIcon v-if="isChecked" icon="check" size="12px" color="white" />
        </div>
      </slot>
      <!-- @slot Custom label markup -->
      <slot name="label" v-bind="{ label, isChecked, disabled }">
        <div v-if="label" class="sf-checkbox__label">{{ label }}</div>
      </slot>
    </label>
    <div class="sf-checkbox__error-message">
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
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    selected: {
      type: [Array, Boolean],
      default: () => [],
    },
    errorMessage: {
      type: String,
      default: "",
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
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCheckbox.scss";
</style>
