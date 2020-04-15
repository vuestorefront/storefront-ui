<template>
  <div
    class="sf-header"
    :class="{
      'sf-header--has-mobile-search': hasMobileSearch,
      'sf-header--is-sticky': isSticky,
      'sf-header--is-hidden': !isVisible,
    }"
  >
    <div class="sf-header__sticky-container">
      <header ref="header" class="sf-header__container">
        <!--@slot Use this slot to replace logo with text or icon-->
        <slot name="logo" v-bind="{ logo, title }">
          <SfImage
            v-if="logo"
            :src="logo"
            :alt="title"
            class="sf-header__logo"
          />
          <h1 v-else-if="title" class="sf-header__title">{{ title }}</h1>
        </slot>
        <nav class="sf-header__navigation desktop-only">
          <!--@slot Use this slot to replace default navigation links -->
          <slot name="navigation" />
        </nav>
        <!--@slot Use this slot to replace default search bar-->
        <slot name="search" v-bind="{ searchPlaceholder }">
          <SfSearchBar
            :placeholder="searchPlaceholder"
            class="sf-header__search"
            :class="{ 'desktop-only': !hasMobileSearch }"
          />
        </slot>
        <!--@slot Use this slot to replace default header icons with custom content-->
        <slot
          name="header-icons"
          v-bind="{ accountIcon, wishlistIcon, cartIcon }"
        >
          <div class="sf-header__icons desktop-only">
            <SfIcon
              v-for="icon in headerIcons"
              :key="icon.name"
              :icon="icon.icon"
              :has-badge="isCartEmpty && icon.hasBadge === true"
              :badge-label="cartItemsQty"
              size="xs"
              class="sf-header__icon"
              :class="{
                'sf-header__icon--is-active': activeIcon === icon.name,
              }"
              role="button"
              :aria-label="icon.name"
              :aria-pressed="activeIcon === icon.name ? 'true' : 'false'"
              @click="$emit(`click:${icon.name}`)"
            />
          </div>
        </slot>
        <!--@slot Use this slot to replace default header language selector on mobile -->
        <slot name="language-selector" />
      </header>
    </div>
    <div v-show="isSticky" class="sf-header__sticky-holder" :style="height" />
  </div>
</template>
<script>
import Vue from "vue";
import SfHeaderNavigationItem from "./_internal/SfHeaderNavigationItem.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
Vue.component("SfHeaderNavigationItem", SfHeaderNavigationItem);
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfSearchBar from "../../molecules/SfSearchBar/SfSearchBar.vue";
export default {
  name: "SfHeader",
  components: {
    SfIcon,
    SfImage,
    SfSearchBar,
  },
  props: {
    /**
     * Header logo
     */
    logo: {
      type: [String, Object],
      default: "",
    },
    /**
     * Header title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Header cartIcon (accepts same value as SfIcon)
     */
    cartIcon: {
      type: [String, Boolean],
      default: "empty_cart",
    },
    /**
     * Header wishlistIcon (accepts same value as SfIcon)
     */
    wishlistIcon: {
      type: [String, Boolean],
      default: "heart",
    },
    /**
     * Header accountIcon (accepts same value as SfIcon)
     */
    accountIcon: {
      type: [String, Boolean],
      default: "profile",
    },
    /**
     * Header activeIcon (accepts account, wishlist and cart)
     */
    activeIcon: {
      type: String,
      default: "",
      validator(value) {
        return ["", "account", "wishlist", "cart"].includes(value);
      },
    },
    /**
     * Header search on mobile
     */
    hasMobileSearch: {
      type: Boolean,
      default: false,
    },
    /**
     * Header sticky to top
     */
    isSticky: {
      type: Boolean,
      default: false,
    },
    /**
     * Header search placeholder
     */
    searchPlaceholder: {
      type: String,
      default: "Search for items",
    },
    /**
     * Header cart items quantity
     */
    cartItemsQty: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {
      headerIcons: [
        {
          conditional: this.accountIcon,
          icon: this.accountIcon,
          name: "account",
          hasBadge: false,
        },
        {
          conditional: this.wishlistIcon,
          icon: this.wishlistIcon,
          name: "wishlist",
          hasBadge: false,
        },
        {
          conditional: this.cartIcon,
          icon: this.cartIcon,
          name: "cart",
          hasBadge: true,
        },
      ],
      isVisible: true,
      isSearchVisible: true,
      sticky: false,
      scrollDirection: undefined, // false = down, true = up
      lastScrollPosition: 0,
      animationStart: undefined,
      animationLong: undefined,
      animationDuration: 300,
      height: {},
    };
  },
  computed: {
    ...mapMobileObserver(),
    isCartEmpty() {
      return !!this.cartItemsQty;
    },
  },
  watch: {
    scrollDirection() {
      if (typeof window === "undefined" || typeof document === "undefined")
        return;
      window.cancelAnimationFrame(this.animationLong);
      this.animationLong = undefined;
      this.animationStart = undefined;
      this.animationLong = window.requestAnimationFrame(this.animationHandler);
    },
    isMobile: {
      handler() {
        if (typeof window === "undefined" || typeof document === "undefined")
          return;
        this.$nextTick(() => {
          const containerHeight = this.$refs.header;
          this.height = {
            height: `${containerHeight.offsetHeight}px`,
          };
        });
      },
      immediate: true,
    },
    hasMobileSearch: {
      handler() {
        this.$nextTick(() => {
          if (typeof window === "undefined" || typeof document === "undefined")
            return;
          const computedContainer = window.getComputedStyle(this.$refs.header);
          this.height = {
            height: computedContainer.height,
          };
        });
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.isSticky) {
      window.addEventListener("scroll", this.scrollHandler, { passive: true });
    }
  },
  beforeDestroy() {
    if (this.isSticky) {
      window.removeEventListener("scroll", this.scrollHandler);
    }
    unMapMobileObserver();
  },
  methods: {
    animationHandler(timestamp) {
      if (!this.animationStart) this.animationStart = timestamp;
      const progress = timestamp - this.animationStart;
      if (progress < this.animationDuration) {
        this.animationLong = window.requestAnimationFrame(
          this.animationHandler
        );
        return;
      }
      this.isVisible = this.scrollDirection;
    },
    scrollHandler() {
      if (typeof window === "undefined" || typeof document === "undefined")
        return;
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      this.scrollDirection = currentScrollPosition < this.lastScrollPosition;
      this.isSearchVisible = currentScrollPosition <= 0;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfHeader.scss";
</style>
