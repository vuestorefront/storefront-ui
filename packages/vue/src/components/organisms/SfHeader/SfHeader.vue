<template>
  <header ref="header" v-click-outside="closeHandler" class="sf-header">
    <!--@slot Use this slot to replace logo with text or image-->
    <div class="sf-header__header">
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
          <SfHeading
            v-else
            :title="title"
            :level="1"
            class="sf-header__title"
          ></SfHeading>
        </SfLink>
      </slot>
      <div class="sf-header__aside">
        <!-- @slot Use this slot for language or currency selector -->
        <slot name="aside" />
      </div>
      <div class="sf-header__actions">
        <nav class="sf-header__navigation">
          <slot name="navigation">
            <div
              class="sf-header__menu"
              :class="{ 'display-none': isVisibleOnMobile }"
            >
              <SfButton
                v-for="(item, i) in menuItems"
                :key="`button-menu-item-${i}`"
                class="
                  sf-header__menu-item sf-header__menu-item--desktop
                  sf-button--pure
                "
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
                @click="toggleSidebar(item)"
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
            @keyup.enter="$emit('enter:search', $event)"
          />
        </slot>
        <!--@slot Use this slot to replace default header icons with custom content-->
        <slot
          name="header-icons"
          v-bind="{
            activeIcon,
            icons,
            isVisible,
          }"
        >
          <div v-if="isVisible" class="sf-header__icons">
            <SfButton
              v-for="(icon, item) in icons"
              :key="`icon-${item}`"
              class="sf-button--pure sf-header__action"
              :class="`icon-${item}`"
              :data-testid="`icon-${item}`"
              @click="$emit('click:icon', item)"
            >
              <slot :name="`icon-${item}`" v-bind="{ activeIcon }">
                <SfIcon
                  :icon="icon"
                  size="1.25rem"
                  class="sf-header__icon"
                  :class="{ 'is-active': activeIcon === item }"
                />
              </slot>
            </SfButton>
          </div>
        </slot>
      </div>
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
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";

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
    SfHeading,
  },
  directives: { clickOutside },
  props: {
    logo: {
      type: [String, Object],
      default: "",
    },
    logoHeight: {
      type: Number,
      default: 35,
    },
    logoWidth: {
      type: Number,
      default: 34,
    },
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
     * Array of header icons (String or Array).
     * Every icon can be single SVG path (string) or array of SVG paths or icon name
     * from our icons list (such as 'added_to_cart`)
     */
    icons: {
      type: Array,
      default: () => ["empty_cart", "heart", "profile"],
    },
    /**
     * Header activeIcon number from icon prop array
     */
    activeIcon: {
      type: Number,
      default: 0,
    },
    searchPlaceholder: {
      type: String,
      default: "Search for items",
    },
    searchValue: {
      type: String,
      default: "",
    },
    openSidebar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
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
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
  methods: {
    toggleSidebar(item) {
      this.closeHandler();
      this.$emit("click:button", item);
    },
    closeHandler() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfHeader.scss";
</style>
