<template>
  <fieldset
    class="inline-flex rounded-md rating focus-within:outline focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-violet-400"
  >
    <input
      v-model="vueProxyValue"
      type="radio"
      name="rating-1"
      v-for="(item, index) in [...Array(useMaxProp).keys()].map((i) => i + 1)"
      :aria-label="`Rating star ${item} of ${useMaxProp}`"
      :value="item"
      :class="
        _classStringToObject(
          `appearance-none cursor-pointer star-input ${sizeClass}`
        )
      "
      @input="onChangeHandler(item)"
      :disabled="disabled"
      :defaultChecked="modelValue === item"
      :key="`star-${item}+${index}`"
    />
  </fieldset>
</template>

<script>
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

  props: ["max", "size", "onChange", "modelValue", "disabled"],

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
    vueProxyValue() {
      return {
        get: function () {
          return this.modelValue;
        },
        set: function (value) {
          this.$emit("update:modelValue", value);
        },
      };
    },
  },

  methods: {
    onChangeHandler(item) {
      /* IF-vue */
      this.$emit("rating-changed", item);
      /* ENDIF-vue */

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
