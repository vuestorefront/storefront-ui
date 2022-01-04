<template>
  <div
    class="sf-product-card"
    :class="{ 'has-colors': colors.length }"
    data-testid="product-card"
  >
    <div class="sf-product-card__image-wrapper">
      <slot
        name="image"
        v-bind="{ image, title, link, imageHeight, imageWidth }"
      >
        <SfButton
          :link="link"
          class="sf-button--pure sf-product-card__link"
          data-testid="product-link"
          aria-label="Go To Product"
          v-on="$listeners"
        >
          <template v-if="Array.isArray(image)">
            <SfImage
              v-for="(picture, key) in image.slice(0, 2)"
              :key="key"
              class="sf-product-card__picture"
              :src="picture"
              :alt="title"
              :width="imageWidth"
              :height="imageHeight"
            />
          </template>
          <SfImage
            v-else
            class="sf-product-card__image"
            :src="image"
            :alt="title"
            :width="imageWidth"
            :height="imageHeight"
          />
        </SfButton>
      </slot>
      <slot name="colors" v-bind="{ colors }">
        <SfColorPicker
          :class="{ 'display-none': !colors.length }"
          class="sf-product-card__colors"
          label="Choose color"
          :is-open="!isMobile || openColorPicker"
          @click:toggle="toggleColorPicker"
        >
          <SfColor
            v-for="(color, i) in colors"
            :key="color.value"
            :color="color.color"
            :selected="color.selected"
            class="sf-product-card__color"
            :class="{ 'display-none': i > 3 && showBadge }"
            @click="handleSelectedColor(i)"
          />
          <SfBadge
            v-if="showBadge"
            class="sf-product-card__colors-badge color-secondary"
          >
            {{ `+${colors.length - 4}` }}
          </SfBadge>
        </SfColorPicker>
      </slot>
      <slot name="badge" v-bind="{ badgeLabel, badgeColor }">
        <SfBadge
          class="sf-product-card__badge"
          :class="[badgeColorClass, { 'display-none': !badgeLabel }]"
          >{{ badgeLabel }}</SfBadge
        >
      </slot>
      <SfButton
        :aria-label="`${ariaLabel} ${title}`"
        :class="[wishlistIconClasses, { 'display-none': !wishlistIcon }]"
        data-testid="product-wishlist-button"
        @click="toggleIsInWishlist"
      >
        <slot name="wishlist-icon" v-bind="{ currentWishlistIcon }">
          <SfIcon
            v-if="currentWishlistIcon !== false"
            :icon="currentWishlistIcon"
            size="22px"
            data-test="sf-wishlist-icon"
          />
        </slot>
      </SfButton>
      <template :class="{ 'display-none': !showAddToCartButton }">
        <slot
          name="add-to-cart"
          v-bind="{
            isAddedToCart,
            showAddedToCartBadge,
            isAddingToCart,
            title,
          }"
        >
          <SfCircleIcon
            class="sf-product-card__add-button"
            :aria-label="`Add to Cart ${title}`"
            :has-badge="showAddedToCartBadge"
            :disabled="addToCartDisabled"
            data-testid="product-add-icon"
            @click="onAddToCart"
          >
            <span class="sf-product-card__add-button--icons">
              <transition
                v-if="!isAddingToCart && !isAddedToCart"
                name="sf-pulse"
                mode="out-in"
              >
                <slot name="add-to-cart-icon">
                  <SfIcon
                    key="add_to_cart"
                    icon="add_to_cart"
                    size="20px"
                    color="white"
                  />
                </slot>
              </transition>
              <transition v-else name="sf-pulse" mode="out-in">
                <slot name="adding-to-cart-icon">
                  <SfIcon
                    key="added_to_cart"
                    icon="added_to_cart"
                    size="20px"
                    color="white"
                  />
                </slot>
              </transition>
            </span>
          </SfCircleIcon>
        </slot>
      </template>
    </div>
    <slot name="title" v-bind="{ title, link }">
      <SfButton
        :link="link"
        class="sf-button--pure sf-product-card__link"
        data-testid="product-link"
        v-on="$listeners"
      >
        <span class="sf-product-card__title">
          {{ title }}
        </span>
      </SfButton>
    </slot>
    <slot name="price" v-bind="{ specialPrice, regularPrice }">
      <SfPrice
        :class="{ 'display-none': !regularPrice }"
        class="sf-product-card__price"
        :regular="regularPrice"
        :special="specialPrice"
      />
    </slot>
    <slot name="reviews" v-bind="{ maxRating, scoreRating }">
      <div
        :class="{ 'display-none': !scoreRating }"
        class="sf-product-card__reviews"
      >
        <SfRating
          v-if="typeof scoreRating === 'number'"
          class="sf-product-card__rating"
          :max="maxRating"
          :score="scoreRating"
        />
        <SfButton
          :class="{ 'display-none': !reviewsCount }"
          :aria-label="`Read ${reviewsCount} reviews about ${title}`"
          class="sf-button--pure sf-product-card__reviews-count"
          data-testid="product-review-button"
          @click="$emit('click:reviews')"
        >
          ({{ reviewsCount }})
        </SfButton>
      </div>
    </slot>
  </div>
</template>
<script>
import { colorsValues as SF_COLORS } from "@storefront-ui/shared/variables/colors";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfRating from "../../atoms/SfRating/SfRating.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfBadge from "../../atoms/SfBadge/SfBadge.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfColorPicker from "../../molecules/SfColorPicker/SfColorPicker.vue";
import SfColor from "../../atoms/SfColor/SfColor.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
export default {
  name: "SfProductCard",
  components: {
    SfPrice,
    SfRating,
    SfIcon,
    SfImage,
    SfCircleIcon,
    SfBadge,
    SfButton,
    SfColorPicker,
    SfColor,
  },
  props: {
    image: {
      type: [Array, Object, String],
      default: "",
    },
    imageWidth: {
      type: Number,
      default: 216,
    },
    imageHeight: {
      type: Number,
      default: 326,
    },
    badgeLabel: {
      type: String,
      default: "",
    },
    badgeColor: {
      type: String,
      default: "",
    },
    colors: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
    link: {
      type: [String, Object],
      default: null,
    },
    /**
     * Link element tag
     * @deprecated will be removed in 1.0.0 use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined,
    },
    scoreRating: {
      type: [Number, Boolean],
      default: false,
    },
    reviewsCount: {
      type: [Number, Boolean],
      default: false,
    },
    maxRating: {
      type: [Number, String],
      default: 5,
    },
    regularPrice: {
      type: [Number, String],
      default: null,
    },
    specialPrice: {
      type: [Number, String],
      default: null,
    },
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart",
    },
    isInWishlistIcon: {
      type: [String, Array],
      default: "heart_fill",
    },
    isInWishlist: {
      type: Boolean,
      default: false,
    },
    showAddToCartButton: {
      type: Boolean,
      default: false,
    },
    isAddedToCart: {
      type: Boolean,
      deafult: false,
    },
    addToCartDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isAddingToCart: false,
      openColorPicker: false,
    };
  },
  computed: {
    ...mapMobileObserver(),
    isSFColors() {
      return SF_COLORS.includes(this.badgeColor.trim());
    },
    badgeColorClass() {
      return this.isSFColors ? `${this.badgeColor.trim()}` : "";
    },
    currentWishlistIcon() {
      return this.isInWishlist ? this.isInWishlistIcon : this.wishlistIcon;
    },
    showAddedToCartBadge() {
      return !this.isAddingToCart && this.isAddedToCart;
    },
    ariaLabel() {
      return this.isInWishlist ? "Remove from wishlist" : "Add to wishlist";
    },
    wishlistIconClasses() {
      const defaultClass = "sf-button--pure sf-product-card__wishlist-icon";
      return `${defaultClass} ${this.isInWishlist ? "on-wishlist" : ""}`;
    },
    showBadge() {
      return this.colors.length > 5;
    },
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
  methods: {
    toggleIsInWishlist() {
      this.$emit("click:wishlist", !this.isInWishlist);
    },
    onAddToCart(event) {
      event.preventDefault();
      this.isAddingToCart = true;
      setTimeout(() => {
        this.isAddingToCart = false;
      }, 1000);
      this.$emit("click:add-to-cart");
    },
    handleSelectedColor(colorIndex) {
      if (this.colors.length > 0) {
        this.colors.map((color, i) => {
          if (colorIndex === i) {
            this.$emit("click:colors", color);
            if (this.isMobile) {
              this.toggleColorPicker();
            }
          }
        });
      }
    },
    toggleColorPicker() {
      this.openColorPicker = !this.openColorPicker;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfProductCard.scss";
</style>
