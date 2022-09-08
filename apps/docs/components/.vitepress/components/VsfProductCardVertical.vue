<template>
  <div
    :class="
      _classStringToObject(
        `${productCardWidth} block overflow-hidden border border-gray-200 rounded-md hover:shadow-lg`
      )
    "
  >
    <div class="relative">
      <a :href="useLinkProp">
        <img
          loading="lazy"
          :src="useImageProp"
          :alt="useAltProp"
          :width="imageDimensions"
          :height="imageDimensions"
          :class="
            _classStringToObject(
              `${
                useOutOfStockProp ? 'opacity-50' : 'opacity-100'
              } w-full h-auto rounded-md`
            )
          "
        />
      </a>
      <div
        :class="
          _classStringToObject(
            `${
              useSizeProp === 'lg' || useSizeProp === 'base'
                ? 'top-0'
                : '-top-1'
            } absolute left-0`
          )
        "
      >
        <vsf-tag
          variant="info"
          :badge="true"
          :size="useSizeProp === 'lg' || useSizeProp === 'base' ? 'base' : 'sm'"
        >
          <vsf-icon-hot
            :size="
              useSizeProp === 'lg' || useSizeProp === 'base' ? 'base' : 'xs'
            "
          ></vsf-icon-hot>
          {{ useBadgeProp }}
        </vsf-tag>
      </div>
      <div class="absolute bottom-0 left-0 right-0 flex items-end m-2">
        <template v-if="useOutOfStockProp || useInCartProp > 0">
          <vsf-tag
            size="sm"
            :badge="false"
            :variant="useOutOfStockProp ? 'error' : 'positive'"
          >
            <template v-if="useOutOfStockProp">
              <span> Out of stock </span>
            </template>

            <template v-else>
              <span> {{ useInCartProp }} in cart </span>
            </template>
          </vsf-tag>
        </template>

        <button
          class="right-0 ml-auto bg-white border border-gray-200 rounded-full px-1 pb-1 pt-0 group hover:bg-primary-100 hover:border-primary-300 active:border-primary-400 active:bg-primary-200"
          :aria-label="`Add ${useLabelProp} to wishlist`"
          @click="addToWishlist($event)"
        >
          <vsf-icon-favorites-outline
            size="sm"
            class="fill-primary-500 text-primary-500 group-hover:fill-primary-600 group-active:fill-primary-700"
          ></vsf-icon-favorites-outline>
        </button>
      </div>
    </div>
    <div
      :class="
        _classStringToObject(
          `${
            useWithButtonProp ? detailsPadding : ''
          } border-gray-200 border-t-[1px] flex flex-col`
        )
      "
    >
      <a
        :href="useLinkProp"
        :class="_classStringToObject(`${labelClasses} pb-1`)"
      >
        {{ useLabelProp }}
      </a>

      <template v-if="!useWithButtonProp">
        <a
          :href="useLinkProp"
          :class="
            _classStringToObject(
              `${
                useSizeProp === VsfProductCardVerticalSizes.sm ||
                useSizeProp === VsfProductCardVerticalSizes.xs
                  ? 'px-2'
                  : 'px-4'
              } block`
            )
          "
        >
          <vsf-rating
            size="xs"
            type="base"
            :value="3"
            :reviews="-1"
          ></vsf-rating>
        </a>
      </template>

      <template v-else>
        <div class="order-2">
          <vsf-rating
            size="xs"
            type="base"
            :value="3"
            :reviews="-1"
          ></vsf-rating>
        </div>
      </template>

      <template
        v-if="
          (useDescriptionProp && useSizeProp === 'base') || useSizeProp === 'lg'
        "
      >
        <template v-if="!useWithButtonProp">
          <a
            :href="useLinkProp"
            :class="
              _classStringToObject(
                `${
                  useSizeProp === VsfProductCardVerticalSizes.sm ||
                  useSizeProp === VsfProductCardVerticalSizes.xs
                    ? 'px-2'
                    : 'px-4'
                } block pt-2 text-sm font-normal leading-5 text-gray-700 font-body`
              )
            "
          >
            {{ useDescriptionProp }}
          </a>
        </template>

        <template v-else>
          <span
            :class="
              _classStringToObject(
                `${
                  useSizeProp === 'base' ? 'text-xs' : 'text-sm'
                } order-3 mt-2 font-normal leading-5 text-gray-700 font-body`
              )
            "
          >
            {{ useDescriptionProp }}
          </span>
        </template>
      </template>

      <template v-if="!useWithButtonProp">
        <a
          :href="useLinkProp"
          :class="
            _classStringToObject(
              `${
                useSizeProp === VsfProductCardVerticalSizes.sm ||
                useSizeProp === VsfProductCardVerticalSizes.xs
                  ? 'px-2 pt-1 pb-2'
                  : 'px-4 py-4'
              } flex items-baseline`
            )
          "
        >
          <span :class="_classStringToObject(`${priceClasses}`)">{{
            usePriceProp
          }}</span>
          <span
            :class="
              _classStringToObject(
                `${
                  useSizeProp === VsfProductCardVerticalSizes.xs
                    ? 'ml-1'
                    : 'ml-2'
                } text-xs font-normal leading-4 text-gray-500 line-through`
              )
            "
          >
            {{ useOldPriceProp }}
          </span>
        </a>
      </template>

      <template v-else>
        <div :class="_classStringToObject(`flex items-baseline order-1 mb-1`)">
          <span :class="_classStringToObject(priceClasses)">{{
            usePriceProp
          }}</span>
          <span
            :class="
              _classStringToObject(
                `${
                  useSizeProp === VsfProductCardVerticalSizes.xs
                    ? 'ml-1'
                    : 'ml-2'
                } text-xs font-normal leading-4 text-gray-500 line-through`
              )
            "
          >
            {{ useOldPriceProp }}
          </span>
        </div>
      </template>
    </div>

    <template v-if="useWithButtonProp">
      <template v-if="!useOutOfStockProp">
        <button
          @click="addToCart($event)"
          :class="
            _classStringToObject(
              `${
                useSizeProp === VsfProductCardVerticalSizes.sm ||
                useSizeProp === VsfProductCardVerticalSizes.xs
                  ? 'mb-2 mx-2'
                  : 'mb-4 mx-4'
              } inline-flex items-center justify-center border rounded-md cursor-pointer font-body uppercase disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50 leading-5 px-3 py-[6px] text-sm bg-primary-500 text-white hover:bg-primary-600 hover:shadow-medium active:bg-primary-700`
            )
          "
        >
          <vsf-icon-basket size="sm"></vsf-icon-basket>
          <span class="ml-2">
            {{ useAddToCartLabelProp }}
          </span>
        </button>
      </template>

      <template v-else>
        <button
          @click="seeSimilar($event)"
          :class="
            _classStringToObject(
              `${
                useSizeProp === VsfProductCardVerticalSizes.sm ||
                useSizeProp === VsfProductCardVerticalSizes.xs
                  ? 'mb-2 mx-2'
                  : 'mb-4 mx-4'
              } inline-flex items-center justify-center rounded-md cursor-pointer font-body uppercase disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50 leading-5 px-3 py-[6px] text-sm bg-white border border-gray-200 text-primary-500 hover:border-primary-300 hover:bg-green-100 hover:text-primary-600 hover:shadow-medium active:border-primary-400 active:bg-green-200 active:text-primary-700`
            )
          "
        >
          {{ useSeeSimilarLabelProp }}
        </button>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
type VsfProductCardVerticalSizesKeys = keyof typeof VsfProductCardVerticalSizes;
export interface VsfProductCardVerticalProps {
  image: string;
  alt: string;
  link: string;
  ratingValue: number;
  maxRatingValue: number;
  reviews: number;
  label: string;
  price: string;
  oldPrice: string;
  badge: string;
  description: string;
  outOfStock: boolean;
  inCart: number;
  size: VsfProductCardVerticalSizesKeys;
  withButton: boolean;
  addToCartLabel: string;
  seeSimilarLabel: string;
  handleAddToCart: (e?: Event) => void;
  handleAddToWishlist: (e?: Event) => void;
  handleSeeSimilar: (e?: Event) => void;
}

import VsfRating from "../VsfRating/VsfRating.vue";
import VsfTag from "../VsfTag/VsfTag.vue";
import { classStringFromArray } from "../../functions/domUtils";
import VsfIconHot from "../VsfIcons/VsfIconHot.vue";
import VsfIconFavoritesOutline from "../VsfIcons/VsfIconFavoritesOutline.vue";
import VsfIconBasket from "../VsfIcons/VsfIconBasket.vue";
export const VsfProductCardVerticalSizes = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
});
const DEFAULT_VALUES = {
  image: "",
  alt: "",
  link: "/",
  ratingValue: 0,
  maxRatingValue: 0,
  reviews: -1,
  label: "",
  price: "",
  oldPrice: "",
  badge: "",
  description: "",
  outOfStock: false,
  inCart: 0,
  size: VsfProductCardVerticalSizes.base,
  withButton: false,
  addToCartLabel: "Add",
  seeSimilarLabel: "See similar",
};

export default {
  name: "vsf-product-card-vertical",
  components: {
    "vsf-tag": VsfTag,
    "vsf-icon-hot": VsfIconHot,
    "vsf-icon-favorites-outline": VsfIconFavoritesOutline,
    "vsf-rating": VsfRating,
    "vsf-icon-basket": VsfIconBasket,
  },
  props: [
    "image",
    "alt",
    "link",
    "ratingValue",
    "maxRatingValue",
    "reviews",
    "label",
    "price",
    "oldPrice",
    "badge",
    "description",
    "outOfStock",
    "inCart",
    "size",
    "withButton",
    "addToCartLabel",
    "seeSimilarLabel",
    "handleAddToCart",
    "handleAddToWishlist",
    "handleSeeSimilar",
  ],

  data: () => ({ VsfProductCardVerticalSizes }),

  computed: {
    useImageProp() {
      return this.image || DEFAULT_VALUES.image;
    },
    useAltProp() {
      return this.alt || DEFAULT_VALUES.alt;
    },
    useLinkProp() {
      return this.link || DEFAULT_VALUES.link;
    },
    useRatingValueProp() {
      return this.ratingValue || DEFAULT_VALUES.ratingValue;
    },
    useMaxRatingValueProp() {
      return this.maxRatingValue || DEFAULT_VALUES.maxRatingValue;
    },
    useReviewsProp() {
      return this.reviews || DEFAULT_VALUES.reviews;
    },
    useLabelProp() {
      return this.label || DEFAULT_VALUES.label;
    },
    usePriceProp() {
      return this.price || DEFAULT_VALUES.price;
    },
    useOldPriceProp() {
      return this.oldPrice || DEFAULT_VALUES.oldPrice;
    },
    useBadgeProp() {
      return this.badge || DEFAULT_VALUES.badge;
    },
    useDescriptionProp() {
      return this.description || DEFAULT_VALUES.description;
    },
    useOutOfStockProp() {
      return this.outOfStock || DEFAULT_VALUES.outOfStock;
    },
    useInCartProp() {
      return this.inCart || DEFAULT_VALUES.inCart;
    },
    useSizeProp() {
      return this.size || DEFAULT_VALUES.size;
    },
    useWithButtonProp() {
      return this.withButton || DEFAULT_VALUES.withButton;
    },
    useAddToCartLabelProp() {
      return this.addToCartLabel || DEFAULT_VALUES.addToCartLabel;
    },
    useSeeSimilarLabelProp() {
      return this.seeSimilarLabel || DEFAULT_VALUES.seeSimilarLabel;
    },
    imageDimensions() {
      switch (this.useSizeProp) {
        case VsfProductCardVerticalSizes.xs:
          return 148;

        case VsfProductCardVerticalSizes.sm:
          return 180;

        case VsfProductCardVerticalSizes.lg:
          return 280;

        default:
          return 230;
      }
    },
    detailsPadding() {
      return classStringFromArray([
        this.useSizeProp === VsfProductCardVerticalSizes.xs ||
        this.useSizeProp === VsfProductCardVerticalSizes.sm
          ? "p-2"
          : "p-4",
      ]);
    },
    productCardWidth() {
      switch (this.useSizeProp) {
        case VsfProductCardVerticalSizes.xs:
          return `w-[148px]`;

        case VsfProductCardVerticalSizes.sm:
          return `w-[180px]`;

        case VsfProductCardVerticalSizes.lg:
          return `w-[280px]`;

        default:
          return `w-[230px]`;
      }
    },
    labelClasses() {
      return classStringFromArray([
        "block font-normal font-body",
        this.useSizeProp === VsfProductCardVerticalSizes.lg
          ? "text-base"
          : "text-sm",
        this.useWithButtonProp && "p-0",
        !this.useWithButtonProp &&
          this.useSizeProp === VsfProductCardVerticalSizes.lg &&
          "px-4 pt-4",
        !this.useWithButtonProp &&
          this.useSizeProp === VsfProductCardVerticalSizes.base &&
          "px-4 pt-4",
        !this.useWithButtonProp &&
          this.useSizeProp === VsfProductCardVerticalSizes.sm &&
          "px-2 pt-2",
        !this.useWithButtonProp &&
          this.useSizeProp === VsfProductCardVerticalSizes.xs &&
          "px-2 pt-2",
      ]);
    },
    priceClasses() {
      return classStringFromArray([
        "font-bold font-headings",
        this.useSizeProp === VsfProductCardVerticalSizes.xs &&
          "text-xs leading-4",
        this.useSizeProp === VsfProductCardVerticalSizes.sm &&
          "text-xs leading-4",
        this.useSizeProp === VsfProductCardVerticalSizes.base &&
          "text-lg leading-6",
        this.useSizeProp === VsfProductCardVerticalSizes.lg &&
          "text-lg leading-6",
        this.useOldPriceProp ? "text-secondary-700" : "text-gray-900",
      ]);
    },
  },

  methods: {
    addToCart(event) {
      this.$emit("addToCart", event);
      this.handleAddToCart && this.handleAddToCart(event);
    },
    addToWishlist(event) {
      this.$emit("addToWishlist", event);
      this.handleAddToWishlist && this.handleAddToWishlist(event);
    },
    seeSimilar(event) {
      this.$emit("seeSimilar", event);
      this.handleSeeSimilar && this.handleSeeSimilar(event);
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
