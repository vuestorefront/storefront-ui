<template>
  <header ref="header" v-click-outside="closeHandler" class="sf-header">
    <!--@slot Use this slot to replace logo with text or image-->
    <slot name="logo" v-bind="{ logo, title }">
      <SfLink link="/">
        <SfImage v-if="logo" :src="logo" :alt="title" class="sf-header__logo" />
        <h1 v-else class="sf-header__title">{{ title }}</h1>
      </SfLink>
    </slot>
    <div class="sf-header__aside">
      <!-- @slot Use this slot for language or currency selector -->
      <slot name="aside" />
    </div>
    <div class="sf-header__actions">
      <nav class="sf-header__navigation">
        <slot name="navigation">
          <div v-if="!isVisibleOnMobile" class="sf-header__menu">
            <SfButton
              v-for="(item, i) in menuItems"
              :key="`button-menu-item-${i}`"
              class="sf-header__menu-item sf-header__menu-item--desktop sf-button--pure"
              v-on="$listeners"
              @mouseenter="$emit('mouseenter:button', item)"
              @mouseleave="$emit('mouseleave:button', '')"
              @click="$emit('click:button', item)"
            >
              {{ item }}
            </SfButton>
          </div>
          <SfSidebar
            :visible="isVisibleOnMobile && openSidebar"
            :persistent="true"
            :overlay="false"
            class="sf-header__menu--sidebar"
            @close="$emit('close')"
          >
            <SfMenuItem
              v-for="(item, i) in menuItems"
              :key="`menu-item-${i}`"
              :label="item"
              class="sf-header__menu-item sf-header__menu-item--mobile"
              @click="$emit('click:button', item)"
            />
          </SfSidebar>
          <div v-if="openContent" class="sf-header__menu-content">
            <template v-for="item in menuItems">
              <slot :name="item" />
            </template>
          </div>
        </slot>
      </nav>
      <!--@slot Use this slot to replace default search bar-->
      <slot
        v-if="isVisible"
        name="search"
        v-bind="{ searchValue, searchPlaceholder }"
      >
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
          cartIcon,
          wishlistIcon,
          accountIcon,
        }"
      >
        <div v-if="isVisible" class="sf-header__icons">
          <SfButton
            v-if="accountIcon"
            class="sf-button--pure sf-header__action"
            data-testid="accountIcon"
            @click="$emit('click:account')"
          >
            <SfIcon
              :icon="accountIcon"
              size="1.25rem"
              class="sf-header__icon"
              :class="activeIcon"
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
</template>
<script>
import { clickOutside } from "../../../utilities/directives";
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
import SfSidebar from "../../organisms/SfSidebar/SfSidebar";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem";

export default {
  name: "SfHeader",
  components: {
    SfImage,
    SfSearchBar,
    SfButton,
    SfIcon,
    SfLink,
    SfSidebar,
    SfMenuItem,
  },
  directives: { clickOutside },
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
     * Navigation items
     */
    menuItems: {
      type: Array,
      default: () => [],
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
     * Open sidebar on mobile view
     */
    openSidebar: {
      type: [Boolean, String],
      default: true,
    },
  },
  data() {
    return {
      icons: [],
      openContent: true,
    };
  },
  computed: {
    ...mapMobileObserver(),
    isVisibleOnMobile() {
      return this.isMobile;
    },
    isVisible() {
      return isClient;
    },
    activeIconClass() {
      return this.activeIcon === "account" ? "is-active" : null;
    },
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
  methods: {
    closeHandler() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfHeader.scss";
</style>
