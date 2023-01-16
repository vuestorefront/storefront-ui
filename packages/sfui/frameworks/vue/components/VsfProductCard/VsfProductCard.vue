<script lang="ts" setup>
import type { PropType } from 'vue';
import { toRefs, computed } from 'vue';
import VsfProductCardImage from './VsfProductCardImage.vue';
import { VsfCounter } from '../VsfCounter';
import { VsfIconBasket, VsfIconFavoritesOutline, VsfIconAddedToBasket, VsfIconHot, VsfIconSizeEnum } from '../VsfIcons';
import { VsfProductCardSizes, VsfProductCardLinkTags } from './types';
import type { VsfProductCardProps } from './types';
import { VsfTag, VsfTagSizes, VsfTagVariants } from '../VsfTag';
import { VsfButton, VsfButtonVariants, VsfButtonSizes } from '../VsfButton';
import { VsfRating, VsfRatingSizes, VsfRatingVariants } from '../VsfRating';

const props = defineProps({
  imageSrc: {
    type: String,
    default: '',
  },
  imageAttr: {
    type: Object as PropType<VsfProductCardProps>,
    default: () => ({}),
  },
  link: {
    type: [String, Object],
    default: '',
  },
  linkTag: {
    type: String as PropType<VsfProductCardLinkTags>,
    default: '',
  },
  ratingValue: {
    type: Number,
    default: null,
  },
  maxRatingValue: {
    type: Number,
    default: null,
  },
  reviewsAmount: {
    type: Number,
    default: null,
  },
  title: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: '',
  },
  oldPrice: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  outOfStock: {
    type: Boolean,
    default: false,
  },
  outOfStockLabel: {
    type: String,
    default: '',
  },
  inCart: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<VsfProductCardSizes>,
    default: VsfProductCardSizes.responsive,
  },
  addToCartLabel: {
    type: String,
    default: '',
  },
  similarLabel: {
    type: String,
    default: '',
  },
  badgeText: {
    type: String,
    default: '',
  },
  vertical: {
    type: Boolean,
    default: true,
  },
  ariaLabelAddToWishlist: {
    type: String,
    default: '',
  },
  ariaLabelBadge: {
    type: String,
    default: '',
  },
  ariaLabelAddToBasket: {
    type: String,
    default: '',
  },
});

const { size, oldPrice, outOfStock, vertical } = toRefs(props);

const isLinkAString = computed(() => {
  return typeof props.link === 'string';
});

defineEmits<{
  (e: 'addToCart', val: Event): void;
  (e: 'addToWishlist', val: Event): void;
  (e: 'seeSimilar', val: Event): void;
  (e: 'seeReviews', val: Event): void;
}>();
</script>

<template>
  <div
    :class="[
      'vsf-product-card',
      {
        'vsf-product-card--sm': size === VsfProductCardSizes.sm && vertical,
        'vsf-product-card--base': size === VsfProductCardSizes.base && vertical,
        'vsf-product-card--responsive': size === VsfProductCardSizes.responsive && vertical,
        'vsf-product-card--horizontal-base': size === VsfProductCardSizes.base && !vertical,
        'vsf-product-card--horizontal-sm': size === VsfProductCardSizes.sm && !vertical,
        'vsf-product-card--horizontal-responsive': size === VsfProductCardSizes.responsive && !vertical,
        'vsf-product-card--horizontal': !vertical,
      },
    ]"
    data-testid="product-card"
  >
    <div class="relative">
      <component :is="linkTag" :href="isLinkAString ? link : null" v-bind="!isLinkAString && link">
        <slot name="image">
          <VsfProductCardImage
            v-if="imageSrc"
            :image-src="imageSrc"
            :image-attr="imageAttr"
            :size="size"
            :vertical="vertical"
            :class="['vsf-product-card__image', { 'vsf-product-card__image--out-of-stock': outOfStock }]"
            data-testid="product-card-image"
          />
        </slot>
      </component>
      <div class="vsf-product-card__image-top">
        <component :is="linkTag" :href="isLinkAString ? link : null" v-bind="!isLinkAString && link">
          <slot v-if="badgeText" name="image-top" v-bind="{ badgeText, ariaLabelBadge }">
            <VsfTag
              :size="VsfTagSizes.sm"
              :variant="VsfTagVariants.secondary"
              strong
              :label="badgeText"
              data-testid="product-card-badge"
            >
              <template #icon>
                <VsfIconHot :size="VsfIconSizeEnum.xs" :aria-label="ariaLabelBadge" />
              </template>
            </VsfTag>
          </slot>
        </component>
      </div>
      <div class="vsf-product-card__image-bottom">
        <slot name="image-bottom">
          <template v-if="vertical && (outOfStock || inCart)">
            <component :is="linkTag" :href="isLinkAString ? link : null" v-bind="!isLinkAString && link">
              <VsfTag
                :size="VsfTagSizes.sm"
                :variant="outOfStock ? VsfTagVariants.negative : VsfTagVariants.primary"
                :label="outOfStock ? outOfStockLabel : inCart"
                data-testid="product-card-in-cart"
              >
                <template v-if="!outOfStock" #icon>
                  <VsfIconAddedToBasket :size="VsfIconSizeEnum.xs" :aria-label="ariaLabelAddToBasket" />
                </template>
              </VsfTag>
            </component>
          </template>

          <VsfButton
            :variant="VsfButtonVariants.secondary"
            :size="VsfButtonSizes.sm"
            class="vsf-product-card__image-bottom-button"
            data-testid="product-card-add-to-wishlist"
            @click="$emit('addToWishlist', $event)"
          >
            <template #prefix>
              <VsfIconFavoritesOutline :size="VsfIconSizeEnum.sm" :aria-label="ariaLabelAddToWishlist" />
            </template>
          </VsfButton>
        </slot>
      </div>
    </div>
    <div class="vsf-product-card__details">
      <template v-if="!vertical && (outOfStock || inCart)">
        <VsfTag
          :size="VsfTagSizes.sm"
          :variant="outOfStock ? VsfTagVariants.negative : VsfTagVariants.primary"
          :label="outOfStock ? outOfStockLabel : inCart"
          class="vsf-product-card__details-in-cart"
        >
          <template v-if="!outOfStock" #icon>
            <VsfIconAddedToBasket :size="VsfIconSizeEnum.xs" />
          </template>
        </VsfTag>
      </template>
      <component
        :is="linkTag"
        v-if="title"
        :href="typeof link === 'string' && link"
        v-bind="typeof link !== 'string' && link"
      >
        <span class="vsf-product-card__details-title" data-testid="product-card-title">
          {{ title }}
        </span>
      </component>
      <div class="vsf-product-card__details-rating">
        <slot name="rating">
          <VsfRating
            v-if="maxRatingValue"
            :size="VsfRatingSizes.xs"
            :type="VsfRatingVariants.base"
            :value="ratingValue"
            :max="maxRatingValue"
            class="vsf-product-card__details-rating-stars"
            data-testid="product-card-rating"
          />
          <VsfButton
            v-if="reviewsAmount"
            :variant="VsfButtonVariants.tertiary"
            class="vsf-product-card__details-rating-button"
            data-testid="product-card-reviews"
            @click="$emit('seeReviews', $event)"
          >
            <VsfCounter v-if="reviewsAmount" class="vsf-product-card__details-rating-counter">
              {{ reviewsAmount }}
            </VsfCounter>
          </VsfButton>
        </slot>
      </div>

      <p v-if="description" class="vsf-product-card__details-description" data-testid="product-card-description">
        {{ description }}
      </p>
      <div class="vsf-product-card__details-wrapper">
        <span class="vsf-product-card__details-prices">
          <span
            :class="[
              'vsf-product-card__details-prices-main',
              {
                'vsf-product-card__details-prices-main--old-price': oldPrice,
              },
            ]"
            data-testid="product-card-price"
            >{{ price }}</span
          >
          <span class="vsf-product-card__details-prices--old-price" data-testid="product-card-old-price">
            {{ oldPrice }}
          </span>
        </span>

        <template v-if="!outOfStock">
          <VsfButton
            :class="[
              'vsf-product-card__details-add-to-cart',
              {
                'vsf-product-card__details-add-to-cart--out-of-stock': outOfStock,
              },
            ]"
            :size="VsfButtonSizes.sm"
            data-testId="product-card-add-to-cart"
            @click="$emit('addToCart', $event)"
          >
            <VsfIconBasket :size="VsfIconSizeEnum.sm" :aria-label="ariaLabelAddToBasket"></VsfIconBasket>
            <span class="ml-2">
              {{ addToCartLabel }}
            </span>
          </VsfButton>
        </template>

        <template v-else>
          <VsfButton
            :class="[
              'vsf-product-card__details-add-to-cart',
              {
                'vsf-product-card__details-add-to-cart--out-of-stock': outOfStock,
              },
            ]"
            :variant="VsfButtonVariants.secondary"
            :size="VsfButtonSizes.sm"
            data-testId="product-card-see-similar"
            @click="$emit('seeSimilar', $event)"
          >
            {{ similarLabel }}
          </VsfButton>
        </template>
      </div>
    </div>
  </div>
</template>
