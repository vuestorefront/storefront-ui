<template>
  <div class="sf-header" :class="{ 'is-sticky': sticky, 'is-hidden': hidden }">
    <div class="sf-header__wrapper">
      <header ref="header" class="sf-header__header">
        <!--@slot Use this slot to replace logo with text or image-->
        <slot name="logo" v-bind="{ logo, title }">
          <SfLink link="/">
            <SfImage
              v-if="logo"
              :src="logo"
              :alt="title"
              :width="logoWidth"
              :height="logoHeight"
              class="sf-header__logo"
            />
            <h1 v-else class="sf-header__title">{{ title }}</h1>
          </SfLink>
        </slot>
        <div class="sf-header__aside">
          <!-- @slot Use this slot for language or currency selector -->
          <slot name="aside" />
        </div>
        <div class="sf-header__actions">
          <nav
            class="sf-header__navigation"
            :class="{ 'is-visible': isNavVisible }"
          >
            <slot name="navigation"></slot>
          </nav>
          <!--@slot Use this slot to replace default search bar-->
          <slot name="search" v-bind="{ searchValue, searchPlaceholder }">
            <SfSearchBar
              :value="searchValue"
              :placeholder="searchPlaceholder"
              aria-label="Search"
              class="sf-header__search"
              @input="$emit('change:search', $event)"
              @enter="$emit('enter:search', $event)"
            />
          </slot>
          <!--@slot Use this slot to replace default header icons with custom content-->
          <slot
            name="header-icons"
            v-bind="{
              activeIcon,
              cartHasProducts,
              cartItemsQty,
              cartIcon,
              wishlistIcon,
              accountIcon,
            }"
          >
            <div class="sf-header__icons">
              <SfButton
                v-if="accountIcon"
                class="sf-button--pure sf-header__action"
                data-testid="accountIcon"
                @click="$emit('click:account')"
              >
                <SfIcon
                  :icon="accountIcon"
                  size="1.25rem"
                  :class="{
                    'sf-header__icon is-active': activeIcon === 'account',
                  }"
                />
              </SfButton>
              <SfButton
                v-if="wishlistIcon"
                class="sf-button--pure sf-header__action"
                data-testid="wishlistIcon"
                @click="$emit('click:wishlist')"
              >
                <SfIcon
                  class="sf-header__icon"
                  :icon="wishlistIcon"
                  :has-badge="wishlistHasProducts"
                  :badge-label="wishlistItemsQty"
                  size="1.25rem"
                  :class="{
                    'sf-header__icon is-active': activeIcon === 'wishlist',
                  }"
                />
              </SfButton>
              <SfButton
                v-if="cartIcon"
                class="sf-button--pure sf-header__action"
                data-testid="cartIcon"
                @click="$emit('click:cart')"
              >
                <SfIcon
                  class="sf-header__icon"
                  :icon="cartIcon"
                  :has-badge="cartHasProducts"
                  :badge-label="cartItemsQty"
                  size="1.25rem"
                  :class="{
                    'sf-header__icon is-active': activeIcon === 'cart',
                  }"
                />
              </SfButton>
            </div>
          </slot>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import SfHeaderNavigationItem from "./_internal/SfHeaderNavigationItem.vue";
import SfHeaderNavigation from "./_internal/SfHeaderNavigation.vue";
Vue.component("SfHeaderNavigation", SfHeaderNavigation);
Vue.component("SfHeaderNavigationItem", SfHeaderNavigationItem);
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
import { isClient } from "../../../utilities/helpers";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfSearchBar from "../../molecules/SfSearchBar/SfSearchBar.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
export default {
  name: "SfHeader",
  components: {
    SfImage,
    SfSearchBar,
    SfButton,
    SfIcon,
    SfLink,
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
     * Header logo height
     */
    logoHeight: {
      type: Number,
      default: 35,
    },
    /**
     * Header logo width
     */
    logoWidth: {
      type: Number,
      default: 34,
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
      type: [String, Boolean, Array],
      default: "empty_cart",
    },
    /**
     * Header wishlistIcon (accepts same value as SfIcon)
     */
    wishlistIcon: {
      type: [String, Boolean, Array],
      default: "heart",
    },
    /**
     * Header accountIcon (accepts same value as SfIcon)
     */
    accountIcon: {
      type: [String, Boolean, Array],
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
     * Header search placeholder
     */
    searchPlaceholder: {
      type: String,
      default: "Search for items",
    },
    /**
     * Header search phrase
     */
    searchValue: {
      type: String,
      default: "",
    },
    /**
     * Header wishlist items quantity
     */
    wishlistItemsQty: {
      type: [String, Number],
      default: "0",
    },
    /**
     * Header cart items quantity
     */
    cartItemsQty: {
      type: [String, Number],
      default: "0",
    },
    /**
     * Header sticky to top
     */
    isSticky: {
      type: Boolean,
      default: false,
    },
    /**
     * Is nav slot visible on mobile view
     */
    isNavVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icons: [],
      hidden: false,
      sticky: false,
      scrollDirection: null,
      lastScrollPosition: 0,
      animationStart: null,
      animationLong: null,
      animationDuration: 300,
    };
  },
  computed: {
    ...mapMobileObserver(),
    cartHasProducts() {
      return parseInt(this.cartItemsQty, 10) > 0;
    },
    wishlistHasProducts() {
      return parseInt(this.wishlistItemsQty, 10) > 0;
    },
  },
  watch: {
    scrollDirection: {
      handler() {
        if (!isClient) return;
        window.cancelAnimationFrame(this.animationLong);
        this.animationLong = null;
        this.animationStart = null;
        this.animationLong = window.requestAnimationFrame(
          this.animationHandler
        );
      },
    },
    isSticky: {
      handler(isSticky) {
        if (!isClient) return;
        this.sticky = isSticky;
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
    unMapMobileObserver();
    if (this.isSticky) {
      window.removeEventListener("scroll", this.scrollHandler, {
        passive: true,
      });
    }
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
      this.hidden = this.scrollDirection === "down";
    },
    scrollHandler() {
      if (!isClient) return;
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (!!this.refs) {
        if (currentScrollPosition >= this.$refs.header.offsetHeight) {
          this.scrollDirection =
            currentScrollPosition < this.lastScrollPosition ? "up" : "down";
        }
      }
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfHeader.scss";
</style>
