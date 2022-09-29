<template>
  <header :class="_classStringToObject(headerClass)">
    <slot name="logo" />

    <template v-if="!$slots.logo">
      <a
        class="flex items-center rounded-md outline-violet"
        aria-label="VSF Homepage"
        :href="useLogoLink"
      >
        <div class="block large:hidden w-10 h-10">
          <vsf-icon-logo-vsf
            :class="
              _classStringToObject(
                `${
                  useThemeVariantProp === 'default'
                    ? 'text-brand'
                    : 'text-white'
                } vsf-icon-full`
              )
            "
          ></vsf-icon-logo-vsf>
        </div>
        <div class="hidden large:block w-[205px] h-[28px]">
          <vsf-icon-logo-vsf-with-name
            :class="
              _classStringToObject(
                `${
                  useThemeVariantProp === 'default'
                    ? 'text-brand'
                    : 'text-white'
                } vsf-icon-full`
              )
            "
          ></vsf-icon-logo-vsf-with-name>
        </div>
      </a>
    </template>

    <div class="items-center mx-4 medium:mx-10">
      <slot name="menu" />

      <template v-if="!$slots.menu">
        <nav>
          <ul class="justify-center hidden px-2 large:flex">
            <template :key="index" v-for="(navItem, index) in useNavData">
              <li class="mr-1 last-of-type:mr-0">
                <vsf-button
                  variant="tertiary"
                  :link="navItem.link"
                  :class="_classStringToObject(`${variantClass} group`)"
                >
                  <span :class="_classStringToObject(variantClass)">{{
                    navItem.text
                  }}</span>
                </vsf-button>
              </li>
            </template>
          </ul>
        </nav>

        <vsf-button
          variant="tertiary"
          @click="onMenuClickHandler($event)"
          :class="
            _classStringToObject(
              `${variantClass} group inline-flex large:hidden items-center justify-center pr-[16px] pl-[14px] py-2 text-base font-medium  bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`
            )
          "
        >
          <vsf-icon-menu
            :class="_classStringToObject(variantClass)"
          ></vsf-icon-menu>
          <span
            :class="
              _classStringToObject(`${variantClass} ml-2 whitespace-nowrap`)
            "
          >
            Menu
          </span>
        </vsf-button>
      </template>
    </div>
    <slot name="search" />

    <template v-if="!$slots.search">
      <vsf-search
        class="hidden small:block justify-self-end medium:ml-10"
        v-model="vueProxyValue"
        placeholder="Search"
        submitText=""
        name="search"
        :value="useSearchValueProp"
        :disabled="useSearchDisabledProp"
        :required="useSearchRequiredProp"
        :autocomplete="useSearchAutocompleteProp"
        @input="onSearchInputHandler($event)"
        @submit="onSearchSubmitHandler($event)"
        @reset="onSearchResetHandler($event)"
      ></vsf-search>
    </template>

    <ul class="flex items-center self-end justify-self-end medium:ml-10">
      <slot name="icons" />

      <template v-if="!$slots.icons">
        <li>
          <vsf-button
            variant="tertiary"
            aria-label="Cart"
            :class="
              _classStringToObject(
                `${variantClass} group relative inline-flex items-center justify-center !px-2 w-10 h-10 text-base font-medium  bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`
              )
            "
          >
            <vsf-icon-basket
              size="base"
              :class="_classStringToObject(variantClass)"
            ></vsf-icon-basket>

            <template v-if="useBasketCounterValue">
              <vsf-counter
                size="xs"
                :pill="true"
                :class="
                  _classStringToObject(
                    `${
                      useThemeVariantProp === 'default'
                        ? 'bg-secondary-700 border-2 border-white'
                        : 'bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700'
                    } absolute top-0.5 right-0.5`
                  )
                "
              >
                <span
                  :class="
                    _classStringToObject(
                      `${
                        useThemeVariantProp === 'default'
                          ? 'text-white '
                          : 'text-gray-900'
                      }`
                    )
                  "
                >
                  {{ useBasketCounterValue }}
                </span>
              </vsf-counter>
            </template>

            <template v-else>
              <div
                :class="
                  _classStringToObject(
                    `${
                      useThemeVariantProp === 'default'
                        ? 'bg-secondary-700'
                        : 'bg-white'
                    } absolute w-3 h-3 top-0.5 right-0.5 rounded-full`
                  )
                "
              ></div>
            </template>
          </vsf-button>
        </li>

        <li class="mx-1">
          <vsf-button
            variant="tertiary"
            aria-label="Wishlist"
            :class="
              _classStringToObject(
                `${variantClass} group relative inline-flex items-center justify-center !px-2 w-10 h-10 text-base font-medium  bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`
              )
            "
          >
            <vsf-icon-favorites-outline
              size="base"
              :class="_classStringToObject(variantClass)"
            ></vsf-icon-favorites-outline>

            <template v-if="useFavouritesCounterValue">
              <vsf-counter
                size="xs"
                :pill="true"
                :class="
                  _classStringToObject(
                    `${
                      useThemeVariantProp === 'default'
                        ? 'bg-secondary-700 border-2 border-white'
                        : 'bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700'
                    } absolute top-0.5 right-0.5`
                  )
                "
              >
                <span
                  :class="
                    _classStringToObject(
                      `${
                        useThemeVariantProp === 'default'
                          ? 'text-white '
                          : 'text-gray-900'
                      }`
                    )
                  "
                >
                  {{ useFavouritesCounterValue }}
                </span>
              </vsf-counter>
            </template>

            <template v-else>
              <div
                :class="
                  _classStringToObject(
                    `${
                      useThemeVariantProp === 'default'
                        ? 'bg-secondary-700'
                        : 'bg-white'
                    } absolute w-3 h-3 top-0.5 right-0.5 rounded-full`
                  )
                "
              ></div>
            </template>
          </vsf-button>
        </li>

        <li>
          <vsf-button
            variant="tertiary"
            aria-label="Log in"
            :class="
              _classStringToObject(
                `${variantClass} group inline-flex items-center justify-center p-2 text-base font-medium bg-transparent rounded-md cursor-pointer group hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`
              )
            "
          >
            <vsf-icon-person
              :class="_classStringToObject(variantClass)"
            ></vsf-icon-person>
            <span
              :class="
                _classStringToObject(
                  `${variantClass} hidden ml-2 whitespace-nowrap large:block`
                )
              "
            >
              {{ useLoginText }}
            </span>
          </vsf-button>
        </li>
      </template>
    </ul>
  </header>
</template>

<script lang="ts">
type VsfNavBarTopThemeVariantsKeys = keyof typeof VsfNavBarTopThemeVariants;
export interface VsfNavBarTopProps {
  searchDisabled?: boolean;
  searchValue?: string;
  searchModelValue?: string;
  searchRequired?: boolean;
  searchAutocomplete?: string;
  themeVariant?: VsfNavBarTopThemeVariantsKeys;
  navData?: {
    text: string;
    link: string;
  }[];
  basketCounterValue?: string | number | null;
  favouritesCounterValue?: string | number | null;
  logoLink?: string;
  loginText?: string;
  slotLogo?: SlotType;
  slotMenu?: SlotType;
  slotSearch?: SlotType;
  slotIcons?: SlotType;
  onMenuToggle?: (...args: Event[]) => void;
  onInput?: (...args: Event[]) => void;
  onSubmit?: (...args: Event[]) => void;
  onReset?: (...args: Event[]) => void;
}

import { SlotType } from "../../functions/types";
import { classStringFromArray } from "../../functions/domUtils";
import VsfIconBasket from "../VsfIcons/VsfIconBasket.vue";
import VsfIconFavoritesOutline from "../VsfIcons/VsfIconFavoritesOutline.vue";
import VsfIconPerson from "../VsfIcons/VsfIconPerson.vue";
import VsfIconMenu from "../VsfIcons/VsfIconMenu.vue";
import VsfIconLogoVsf from "../VsfIcons/VsfIconLogoVsf.vue";
import VsfIconLogoVsfWithName from "../VsfIcons/VsfIconLogoVsfWithName.vue";
import VsfButton from "../VsfButton/VsfButton.vue";
import VsfCounter from "../VsfCounter/VsfCounter.vue";
import VsfSearch from "../VsfSearch/VsfSearch.vue";
export const VsfNavBarTopThemeVariants = Object.freeze({
  default: "default",
  branded: "branded",
});
const DEFAULT_VALUES = {
  searchDisabled: false,
  searchValue: "",
  searchModelValue: "",
  searchRequired: false,
  searchAutocomplete: "",
  themeVariant: "default",
  navData: [],
  basketCounterValue: null,
  favouritesCounterValue: null,
  logoLink: "/",
  loginText: "Log In",
};

export default {
  name: "vsf-nav-bar-top",
  components: {
    "vsf-icon-logo-vsf": VsfIconLogoVsf,
    "vsf-icon-logo-vsf-with-name": VsfIconLogoVsfWithName,
    "vsf-button": VsfButton,
    "vsf-icon-menu": VsfIconMenu,
    "vsf-search": VsfSearch,
    "vsf-icon-basket": VsfIconBasket,
    "vsf-counter": VsfCounter,
    "vsf-icon-favorites-outline": VsfIconFavoritesOutline,
    "vsf-icon-person": VsfIconPerson,
  },
  props: [
    "searchDisabled",
    "searchValue",
    "searchModelValue",
    "searchRequired",
    "searchAutocomplete",
    "themeVariant",
    "navData",
    "basketCounterValue",
    "favouritesCounterValue",
    "logoLink",
    "loginText",
    "slotLogo",
    "slotMenu",
    "slotSearch",
    "slotIcons",
  ],

  computed: {
    useSearchDisabledProp() {
      return this.searchDisabled ?? DEFAULT_VALUES.searchDisabled;
    },
    useSearchValueProp() {
      return this.searchValue || DEFAULT_VALUES.searchValue;
    },
    vueProxyValue: {
        get: function () {
          return this.searchModelValue;
        },
        set: function (value) {
          this.$emit("update:modelSearchValue", value);
        },
    },
    useSearchModelValueProp() {
      return this.searchModelValue || DEFAULT_VALUES.searchModelValue;
    },
    useSearchRequiredProp() {
      return this.searchRequired ?? DEFAULT_VALUES.searchRequired;
    },
    useSearchAutocompleteProp() {
      return this.searchAutocomplete || DEFAULT_VALUES.searchAutocomplete;
    },
    useThemeVariantProp() {
      return this.themeVariant || DEFAULT_VALUES.themeVariant;
    },
    useNavData() {
      return this.navData || DEFAULT_VALUES.navData;
    },
    useBasketCounterValue() {
      return this.basketCounterValue || DEFAULT_VALUES.basketCounterValue;
    },
    useFavouritesCounterValue() {
      return (
        this.favouritesCounterValue || DEFAULT_VALUES.favouritesCounterValue
      );
    },
    useLogoLink() {
      return this.logoLink || DEFAULT_VALUES.logoLink;
    },
    useLoginText() {
      return this.loginText || DEFAULT_VALUES.loginText;
    },
    headerClass() {
      return classStringFromArray([
        "grid grid-cols-[max-content_max-content_1fr] small:grid-cols-[max-content_max-content_minmax(250px,_1fr)_max-content] w-full items-center grid-flow-col py-2 px-4 medium:px-10 medium:py-5",
        this.useThemeVariantProp === "default" ? "bg-white" : "bg-brand",
      ]);
    },
    variantClass() {
      return this.useThemeVariantProp === "default"
        ? "text-gray-900 group-hover:text-green-600 hover:text-green-600 group-active:text-green-700 active:text-green-700"
        : "text-white group-hover:bg-green-600 hover:bg-green-600 group-active:bg-green-700 active:bg-green-700";
    },
    variantBackgroundCLass() {
      return this.useThemeVariantProp === "default"
        ? ""
        : "hover:bg-green-600 active:bg-green-700";
    },
  },

  methods: {
    onMenuClickHandler(event) {
      this.$emit("toggle", event);
    },
    onSearchInputHandler(event) {
      this.$emit("input", event);
    },
    onSearchSubmitHandler(event) {
      this.$emit("submit", event);
    },
    onSearchResetHandler(event) {
      this.$emit("update:modelSearchModelValue", "");
      this.$emit("reset", event);
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
