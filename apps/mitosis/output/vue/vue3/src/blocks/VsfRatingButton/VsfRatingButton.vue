<template>
  <fieldset
    class="inline-flex rounded-md rating focus-within:outline focus-within:outline-2 focus-within:outline-violet-400"
    :disabled="disabled"
  >
    <input
      type="radio"
      class="appearance-none hidden star-input"
      value="0"
      v-model="vueProxyValue"
      :checked="value == 0"
      :name="name"
      :readOnly="true"
      :aria-label="`Rating star 0 of ${useMaxProp}`"
    />
    <template
      :key="`star-${item}+${index}`"
      v-for="(item, index) in [...Array(useMaxProp).keys()].map((i) => i + 1)"
    >
      <input
        v-model="vueProxyValue"
        type="radio"
        :aria-label="`Rating star ${item} of ${useMaxProp}`"
        :name="name"
        :value="item"
        :class="
          _classStringToObject(
            `appearance-none cursor-pointer star-input ${sizeClass}`
          )
        "
        @input="onChangeHandler(item)"
        :disabled="disabled"
        :checked="value == item"
      />
    </template>
  </fieldset>
</template>

<script lang="ts">
type VsfRatingButtonVariantsKeys = keyof typeof VsfRatingButtonVariants;
export interface VsfRatingButtonProps {
  size?: VsfRatingButtonVariantsKeys;
  max?: number;
  disabled?: boolean;
  onChange?: (...args: any[]) => void;
  modelValue?: any;
  value?: any;
  name?: string;
}

export const VsfRatingButtonVariants = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
});
const DEFAULT_VALUES = {
  max: 5,
  size: VsfRatingButtonVariants.base,
};

export default {
  name: "vsf-rating-button",

  props: ["max", "size", "onChange", "modelValue", "disabled", "value", "name"],

  computed: {
    useMaxProp() {
      return Number(this.max) || DEFAULT_VALUES.max;
    },
    useSizeProp() {
      return this.size || DEFAULT_VALUES.size;
    },
    sizeClass() {
      return {
        xs: "h-4 w-4",
        sm: "h-5 w-5",
        base: "h-6 w-6",
        lg: "h-10 w-10",
        xl: "h-12 w-12",
        "2xl": "h-20 w-20",
      }[this.useSizeProp];
    },
    vueProxyValue: {
        get: function () {
          return this.modelValue;
        },
        set: function (value) {
          this.$emit("update:modelValue", value);
        },
    },
  },

  methods: {
    onChangeHandler(item) {
      this.$emit("rating-changed", item);
      this.onChange && this.onChange(item);
    },
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
