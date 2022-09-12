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
    <template v-if="isBaseType">
      <template :key="index" v-for="(_, index) in [...Array(filled)]">
        <vsf-icon-star
          aria-hidden="true"
          class="text-warning-500"
          :size="useSizeProp"
        ></vsf-icon-star>
      </template>

      <template v-if="isPartiallyFilled">
        <vsf-icon-star-partially-filled
          aria-hidden="true"
          class="text-warning-500"
          :size="useSizeProp"
        ></vsf-icon-star-partially-filled>
      </template>

      <template :key="index" v-for="(_, index) in [...Array(empty)]">
        <vsf-icon-star-outline
          aria-hidden="true"
          class="text-gray-500 opacity-50"
          :size="useSizeProp"
        ></vsf-icon-star-outline>
      </template>
    </template>

    <template v-else>
      <vsf-icon-star
        aria-hidden="true"
        class="text-warning-500"
        :size="useSizeProp"
      ></vsf-icon-star>

      <span class="ml-1">{{ ratingValue }}</span>
    </template>

    <template v-if="reviews">
      <vsf-counter class="ml-1" :size="ratingSize">{{ reviews }}</vsf-counter>
    </template>
  </div>
</template>

<script lang="ts">
type VsfRatingVariantsKeys = keyof typeof VsfRatingVariants;
type VsfRatingTypesKeys = keyof typeof VsfRatingTypes;
export interface VsfRatingProps {
  value?: number;
  max?: number;
  reviews?: number;
  size?: VsfRatingVariantsKeys;
  type?: VsfRatingTypesKeys;
}

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
