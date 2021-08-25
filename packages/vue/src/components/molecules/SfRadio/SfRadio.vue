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
      />
      <!-- @slot Custom checkmark markup (bind 'isChecked' boolean, 'disabled' boolean -->
      <slot name="checkmark" v-bind="{ isChecked, disabled }">
        <div
          class="sf-radio__checkmark"
          :class="{ 'sf-radio__checkmark is-active': isChecked }"
        ></div>
      </slot>
      <div class="sf-radio__content">
        <!-- @slot Custom label markup (bind 'label' string, 'isChecked' boolean, 'disabled' boolean -->
        <slot name="label" v-bind="{ label, isChecked, disabled }">
          <div v-if="label" class="sf-radio__label">{{ label }}</div>
        </slot>
        <!-- @slot Custom details markup (bind 'details' string -->
        <slot name="details" v-bind="{ details }">
          <p v-if="details" class="sf-radio__details">
            {{ details }}
          </p>
        </slot>
        <!-- @slot Custom description markup (bind 'description' string -->
        <slot name="description" v-bind="{ description }">
          <p v-if="description" class="sf-radio__description">
            {{ description }}
          </p>
        </slot>
      </div>
    </label>
  </div>
</template>
<script>
import { focus } from "../../../utilities/directives"
export default {
  name: "SfRadio",
  directives: {
    focus,
  },
  model: {
    prop: "selected",
    event: "input",
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
      return this.value === this.selected
    },
  },
  methods: {
    changeHandler() {
      this.$emit("change", this.value)
      this.$emit("input", this.value)
    },
  },
}
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfRadio.scss";
</style>
