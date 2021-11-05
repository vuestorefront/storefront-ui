<template>
  <div
    class="sf-radio"
    :class="{
      'is-active': isChecked,
      'is-disabled': disabled,
    }"
  >
    <label class="sf-radio__container">
      <input
        v-focus
        type="radio"
        :name="name"
        :value="value"
        :checked="isChecked"
        :disabled="disabled"
        @change="changeHandler"
        @input="inputHandler"
      />
      <!-- @slot Custom checkmark markup -->
      <slot name="checkmark" v-bind="{ isChecked, disabled }">
        <span
          class="sf-radio__checkmark"
          :class="{ 'sf-radio__checkmark is-active': isChecked }"
        ></span>
      </slot>
      <p class="sf-radio__content">
        <!-- @slot Custom label markup -->
        <slot name="label" v-bind="{ label, isChecked, disabled }">
          <span v-if="label" class="sf-radio__label">{{ label }}</span>
        </slot>
        <!-- @slot Custom details markup -->
        <slot name="details" v-bind="{ details }">
          <p v-if="details" class="sf-radio__details">
            {{ details }}
          </p>
        </slot>
        <!-- @slot Custom description markup -->
        <slot name="description" v-bind="{ description }">
          <p v-if="description" class="sf-radio__description">
            {{ description }}
          </p>
        </slot>
      </p>
    </label>
  </div>
</template>
<script>
import { focus } from "../../../utilities/directives";
export default {
  name: "SfRadio",
  directives: {
    focus,
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
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    details: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: String,
      default: "",
    },
  },
  computed: {
    isChecked() {
      return this.value === this.selected;
    },
  },
  methods: {
    changeHandler() {
      this.$emit("change", this.value);
    },
    inputHandler() {
      this.$emit("input", this.value);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfRadio.scss";
</style>
