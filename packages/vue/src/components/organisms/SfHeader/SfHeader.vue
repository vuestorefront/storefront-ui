<template>
  <header
    class="sf-header"
    :class="{ 'sf-header--has-mobile-search': hasMobileSearch }"
  >
    <!--@slot Use this slot to replace logo with text or icon-->
    <slot name="logo" v-bind="{ logo, title }">
      <SfImage v-if="logo" :src="logo" :alt="title" class="sf-header__logo" />
      <h1 v-else class="sf-header__title">{{ title }}</h1>
    </slot>
    <nav class="sf-header__navigation">
      <!--@slot Use this slot to replace default navigation links -->
      <slot name="navigation" />
    </nav>
    <!--@slot Use this slot to replace default search bar-->
    <slot name="search">
      <SfSearchBar :placeholder="searchPlaceholder" class="sf-header__search" />
    </slot>
    <!--@slot Use this slot to replace default header icons with custom content-->
    <slot name="header-icons" v-bind="{ accountIcon, wishlistIcon, cartIcon }">
      <div class="sf-header__icons">
        <SfCircleIcon
          v-if="accountIcon"
          :icon="accountIcon"
          icon-size="20px"
          class="sf-header__icon"
          :class="{ 'sf-header__icon--is-active': activeIcon === 'account' }"
          role="button"
          aria-label="account"
          :aria-pressed="activeIcon === 'account' ? 'true' : 'false'"
          @click="$emit('click:account')"
        />
        <SfCircleIcon
          v-if="wishlistIcon"
          :icon="wishlistIcon"
          icon-size="20px"
          class="sf-header__icon"
          :class="{ 'sf-header__icon--is-active': activeIcon === 'wishlist' }"
          role="button"
          aria-label="wishlist"
          :aria-pressed="activeIcon === 'wishlist' ? 'true' : 'false'"
          @click="$emit('click:wishlist')"
        />
        <SfCircleIcon
          v-if="cartIcon"
          :icon="cartIcon"
          icon-size="20px"
          class="sf-header__icon"
          :class="{ 'sf-header__icon--is-active': activeIcon === 'cart' }"
          role="button"
          aria-label="cart"
          :aria-pressed="activeIcon === 'cart' ? 'true' : 'false'"
          @click="$emit('click:cart')"
        />
      </div>
    </slot>
    <!--@slot Use this slot to replace default header language selector on mobile -->
    <slot name="language-selector"></slot>
  </header>
</template>
<script>
import Vue from "vue";
import SfHeaderNavigationItem from "./_internal/SfHeaderNavigationItem.vue";
Vue.component("SfHeaderNavigationItem", SfHeaderNavigationItem);
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfSearchBar from "../../molecules/SfSearchBar/SfSearchBar.vue";
export default {
  name: "SfHeader",
  components: {
    SfCircleIcon,
    SfImage,
    SfSearchBar
  },
  props: {
    /**
     * Header logo
     */
    logo: {
      type: [String, Object],
      default: ""
    },
    /**
     * Header title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Header cartIcon (accepts same value as SfIcon)
     */
    cartIcon: {
      type: [String, Boolean],
      default: "empty_cart"
    },
    /**
     * Header wishlistIcon (accepts same value as SfIcon)
     */
    wishlistIcon: {
      type: [String, Boolean],
      default: "heart"
    },
    /**
     * Header accountIcon (accepts same value as SfIcon)
     */
    accountIcon: {
      type: [String, Boolean],
      default: "profile"
    },
    /**
     * Header activeIcon (accepts account, wishlist and cart)
     */
    activeIcon: {
      type: String,
      default: "",
      validator(value) {
        return ["", "account", "wishlist", "cart"].includes(value);
      }
    },
    /**
     * Header search on mobile
     */
    hasMobileSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Header search placeholder
     */
    searchPlaceholder: {
      type: String,
      default: "Search for items"
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfHeader.scss";
</style>
