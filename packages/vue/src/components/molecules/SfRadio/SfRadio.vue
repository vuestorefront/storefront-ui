<template>
  <div
    class="sf-radio"
    :class="{ 'is-active': isChecked, 'is-disabled': disabled }"
  >
    <input
      :id="value"
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      class="sf-radio__input"
      @input="inputHandler"
    />
    <label :for="value" class="sf-radio__container">
      <!-- @slot Custom checkmark markup (bind 'isChecked' boolean, 'disabled' boolean -->
      <slot name="checkmark" v-bind="{ isChecked, disabled }">
        <div
          class="sf-radio__checkmark"
          :class="{ 'is-active': isChecked }"
        ></div>
      </slot>
      <div class="sf-radio__content">
        <!-- @slot Custom label markup (bind 'label' string, 'isChecked' boolean, 'disabled' boolean -->
        <slot name="label" v-bind="{ label, isChecked, disabled }">
          <div v-if="label" class="sf-radio__label">{{ label }}</div>
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
export default {
  name: "SfRadio",
  model: {
    prop: "selected",
    event: "input"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
      default: ""
    }
  },
  computed: {
    isChecked() {
      return this.value === this.selected;
    }
  },
  methods: {
    inputHandler() {
      this.$emit("input", this.value);
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfRadio.scss";
</style>
