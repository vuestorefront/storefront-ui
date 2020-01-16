<template>
  <div class="sf-options">
    <!-- @slot -->
    <slot name="label" v-bind="{ label }">
      <label v-if="label" class="sf-options__label">{{ label }}</label>
    </slot>
    <div class="sf-options__wrapper">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="sf-options__option-container"
        @click="setActiveValue(option.value)"
      >
        <!-- @slot -->
        <slot
          name="text"
          v-bind="{
            text: option.text,
            value: option.value,
            isTypeText,
            isOptionSelected
          }"
        >
          <div
            v-if="isTypeText"
            class="sf-options__option-text"
            :class="{
              'sf-options__option-text--selected': isOptionSelected(
                option.value
              )
            }"
          >
            {{ option.text }}
          </div>
        </slot>
        <!-- @slot -->
        <slot
          name="color"
          v-bind="{
            color: option.color,
            value: option.value,
            isOptionSelected
          }"
        >
          <div v-if="isTypeColor" class="sf-options__option-color-wrapper">
            <div
              class="sf-options__option-color"
              :class="{
                'sf-options__option-color--selected': isOptionSelected(
                  option.value
                )
              }"
              :style="{ backgroundColor: option.color }"
            ></div>
            <div class="sf-options__option-color-check"></div>
          </div>
        </slot>
        <!-- @slot -->
        <slot
          name="image"
          v-bind="{
            image: option.image,
            value: option.value,
            isOptionSelected
          }"
        >
          <div v-if="isTypeImage" class="sf-options__option-image-wrapper">
            <div
              class="sf-options__option sf-options__option-image"
              :class="{
                'sf-options__option-image--selected': isOptionSelected(
                  option.value
                )
              }"
              :style="{ backgroundImage: `url(${option.image})` }"
            />
            <div class="sf-options__option-image-check"></div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SfOptions",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: "text",
      validator: val => ["text", "color", "image"].includes(val)
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    isTypeColor() {
      return this.type === "color";
    },
    isTypeImage() {
      return this.type === "image";
    },
    isTypeText() {
      return this.type === "text" && !this.isTypeColor && !this.isTypeImage;
    }
  },
  methods: {
    setActiveValue(value) {
      this.$emit("input", value);
    },
    isOptionSelected(value) {
      return this.value === value;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfOptions.scss";
</style>
