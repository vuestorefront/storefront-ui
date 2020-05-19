<template>
  <div
    class="sf-header"
    :class="{ 'sf-header--is-sticky': sticky, 'sf-header--is-hidden': hidden }"
    :style="stickyHeight"
  >
    <div class="sf-header__wrapper">
      <header ref="header">
        <!--@slot Use this slot to replace logo with text or image-->
        <slot name="logo" v-bind="{ logo, title }">
          <SfLink link="/">
            <SfImage
              v-if="logo"
              :src="logo"
              :alt="title"
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
          <nav class="sf-header__navigation">
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
          <slot name="header-icons" />
        </div>
      </header>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import SfHeaderNavigationItem from "./_internal/SfHeaderNavigationItem.vue";
Vue.component("SfHeaderNavigationItem", SfHeaderNavigationItem);
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
import { isClient } from "../../../utilities/helpers";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfSearchBar from "../../molecules/SfSearchBar/SfSearchBar.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
export default {
  name: "SfHeader",
  components: {
    SfImage,
    SfSearchBar,
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
     * @deprecated will be removed in 1.0.0
     */
    activeIcon: {
      type: String,
      default: "",
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
     * Header search on mobile
     */
  },
  data() {
    return {
      icons: [],
      height: 0,
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
    stickyHeight() {
      return {
        "--_header-height": `${this.height}px`,
      };
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
    isMobile: {
      handler() {
        if (!isClient) return;
        this.$nextTick(() => {
          this.height = this.$refs.header.offsetHeight;
        });
      },
      immediate: true,
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
      if (currentScrollPosition >= this.height) {
        this.scrollDirection =
          currentScrollPosition < this.lastScrollPosition ? "up" : "down";
      }
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfHeader.scss";
</style>
