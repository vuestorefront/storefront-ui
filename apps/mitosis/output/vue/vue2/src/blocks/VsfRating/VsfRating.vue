<template>
  <div
    role="img"
    :class="
      _classStringToObject(
        `flex items-center h-6 font-normal pointer-events-none font-body ${textClass}`
      )
    "
    :aria-label="`Rating: ${useValueProp} out of ${useMaxProp} stars`"
  >
    <vsf-icon-star
      aria-hidden="true"
      class="text-warning-500"
      v-for="(_, index) in [...Array(filled)]"
      v-if="isBaseType"
      :size="useSizeProp"
      :key="index"
    ></vsf-icon-star>

    <vsf-icon-star
      aria-hidden="true"
      class="text-warning-500"
      :size="useSizeProp"
    ></vsf-icon-star>

    <span class="ml-1">{{ ratingValue }}</span>

    <vsf-counter class="ml-1" v-if="reviews" :size="ratingSize">{{
      reviews
    }}</vsf-counter>
  </div>
</template>

<script>
import VsfIconStar from "../VsfIcons/VsfIconStar.vue";
import VsfIconStarOutline from "../VsfIcons/VsfIconStarOutline.vue";
import VsfIconStarPartiallyFilled from "../VsfIcons/VsfIconStarPartiallyFilled.vue";
import VsfCounter from "../VsfCounter/VsfCounter.vue";
export const VsfRatingVariants = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
});
export const VsfRatingTypes = Object.freeze({
  base: "base",
  withValue: "withValue",
});
const DEFAULT_VALUES = {
  value: 0,
  max: 5,
  size: VsfRatingVariants.base,
  type: VsfRatingTypes.base,
};

export default {
  name: "vsf-rating",
  components: {
    "vsf-icon-star": VsfIconStar,
    "vsf-icon-star-partially-filled": VsfIconStarPartiallyFilled,
    "vsf-icon-star-outline": VsfIconStarOutline,
    "vsf-counter": VsfCounter,
  },
  props: ["value", "max", "size", "type", "reviews"],

  computed: {
    useValueProp() {
      return Math.max(
        0,
        Math.min(Number(this.value) || DEFAULT_VALUES.value, this.useMaxProp)
      );
    },
    useMaxProp() {
      return Number(this.max) || DEFAULT_VALUES.max;
    },
    useSizeProp() {
      return this.size || DEFAULT_VALUES.size;
    },
    useTypeProp() {
      return this.type || DEFAULT_VALUES.type;
    },
    isPartiallyFilled() {
      return this.useValueProp % 1 > 0.25 && this.useValueProp % 1 < 0.75;
    },
    filled() {
      return Math.floor(this.useValueProp) + (this.useValueProp % 1 > 0.75);
    },
    empty() {
      return this.useMaxProp - this.filled - Number(this.isPartiallyFilled);
    },
    ratingValue() {
      return Math.min(this.useValueProp, this.useMaxProp);
    },
    ratingSize() {
      return {
        xs: "base",
        sm: "base",
        base: "lg",
        lg: "xl",
        xl: "2xl",
      }[this.useSizeProp];
    },
    textClass() {
      return {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-lg",
        "2xl": "text-lg",
      }[this.useSizeProp];
    },
    isBaseType() {
      return this.useTypeProp === VsfRatingTypes.base;
    },
  },

  methods: {
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
