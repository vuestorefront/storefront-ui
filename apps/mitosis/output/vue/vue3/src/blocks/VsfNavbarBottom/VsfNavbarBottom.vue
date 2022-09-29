<template>
  <nav
    :class="
      _classStringToObject(
        `${
          useAbsolutePositionProp === false ? 'fixed' : 'absolute'
        } bottom-0 w-full`
      )
    "
  >
    <ul
      :class="
        _classStringToObject(
          `grid grid-flow-col bg-white auto-cols-fr justify-items-stretch ${
            useVariantProp === VsfNavbarBottomVariants.secondary
              ? 'bg-brand'
              : 'bg-white'
          }`
        )
      "
    >
      <template
        :key="`${item.label}-${index}`"
        v-for="(item, index) in useItemsProp"
      >
        <li class="flex">
          <vsf-button
            variant="tertiary"
            :link="item.link"
            :aria-label="!useWithLabelsProp ? `Go to ${item.label}` : undefined"
            @click="onClickHandler(item.label)"
            :class="
              _classStringToObject(
                `${
                  useVariantProp === 'primary'
                    ? 'hover:bg-primary-100 active:bg-primary-200'
                    : 'hover:!bg-primary-600 active:!bg-primary-700'
                } flex flex-col items-center justify-center flex-1 pt-3 pb-1 group rounded-none`
              )
            "
          >
            <template v-if="isIcon('home', item.icon)">
              <vsf-icon-home
                :class="_classStringToObject(iconsClass)"
              ></vsf-icon-home>
            </template>

            <template v-if="isIcon('basket', item.icon)">
              <span class="inline-block relative">
                <vsf-icon-basket
                  :class="_classStringToObject(iconsClass)"
                ></vsf-icon-basket>

                <template v-if="!useBasketCounterValue">
                  <template v-if="useBasketDot">
                    <div
                      :class="
                        _classStringToObject(
                          `${
                            useVariantProp === 'primary'
                              ? 'bg-secondary-700'
                              : 'bg-white'
                          } absolute w-3 h-3  -top-2 -right-2 rounded-full`
                        )
                      "
                    ></div>
                  </template>
                </template>

                <template v-else>
                  <vsf-counter
                    size="xs"
                    :pill="true"
                    :class="
                      _classStringToObject(
                        `${
                          useVariantProp === 'primary'
                            ? 'bg-secondary-700 border-2 border-white'
                            : 'bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700'
                        } absolute  -top-2 -right-2`
                      )
                    "
                  >
                    <span
                      :class="
                        _classStringToObject(
                          `${
                            useVariantProp === 'primary'
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
              </span>
            </template>

            <template v-if="isIcon('search', item.icon)">
              <vsf-icon-search
                :class="_classStringToObject(iconsClass)"
              ></vsf-icon-search>
            </template>

            <template v-if="isIcon('menu', item.icon)">
              <vsf-icon-menu
                :class="_classStringToObject(iconsClass)"
              ></vsf-icon-menu>
            </template>

            <template v-if="isIcon('favorites', item.icon)">
              <span class="inline-block relative">
                <vsf-icon-favorites-outline
                  :class="_classStringToObject(iconsClass)"
                ></vsf-icon-favorites-outline>

                <template v-if="!useFavouritesCounterValue">
                  <template v-if="useFavouritesDot">
                    <div
                      :class="
                        _classStringToObject(
                          `${
                            useVariantProp === 'primary'
                              ? 'bg-secondary-700'
                              : 'bg-white'
                          } absolute w-3 h-3 -top-2 -right-2 rounded-full`
                        )
                      "
                    ></div>
                  </template>
                </template>

                <template v-else>
                  <vsf-counter
                    size="xs"
                    :pill="true"
                    :class="
                      _classStringToObject(
                        `${
                          useVariantProp === 'primary'
                            ? 'bg-secondary-700 border-2 border-white'
                            : 'bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700'
                        } absolute -top-2 -right-2`
                      )
                    "
                  >
                    <span
                      :class="
                        _classStringToObject(
                          `${
                            useVariantProp === 'primary'
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
              </span>
            </template>

            <template v-if="useWithLabelsProp">
              <span
                :class="
                  _classStringToObject(
                    `${
                      useVariantProp === 'primary'
                        ? 'text-gray-900 group-hover:text-primary-600 group-active:text-primary-700'
                        : 'text-white'
                    } text-xs mt-0.5 font-medium`
                  )
                "
              >
                {{ item.label }}
              </span>
            </template>
          </vsf-button>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script lang="ts">
type VsfNavbarBottomVariantsKeys = keyof typeof VsfNavbarBottomVariants;
type item = {
  label?: string;
  link?: string;
  tag: string;
  icon: string;
};
export interface VsfNavbarBottomProps {
  variant?: VsfNavbarBottomVariantsKeys;
  absolutePosition: boolean;
  items: item[];
  withLabels: boolean;
  basketCounterValue?: string | number | null;
  basketDot: boolean;
  favouritesCounterValue?: string | number | null;
  favouritesDot: boolean;
  onClick?: (...args: any[]) => void;
}

import VsfButton from "../VsfButton/VsfButton";
import VsfCounter from "../VsfCounter/VsfCounter";
import VsfIconHome from "../VsfIcons/VsfIconHome";
import VsfIconBasket from "../VsfIcons/VsfIconBasket";
import VsfIconSearch from "../VsfIcons/VsfIconSearch";
import VsfIconMenu from "../VsfIcons/VsfIconMenu";
import VsfIconFavoritesOutline from "../VsfIcons/VsfIconFavoritesOutline";
export const VsfNavbarBottomVariants = Object.freeze({
  primary: "primary",
  secondary: "secondary",
});
const DEFAULT_VALUES = {
  variant: VsfNavbarBottomVariants.primary,
  absolutePosition: false,
  items: [],
  withLabels: false,
};

export default {
  name: "vsf-navbar-bottom",
  components: {
    VsfButton: VsfButton,
    VsfIconHome: VsfIconHome,
    VsfIconBasket: VsfIconBasket,
    VsfCounter: VsfCounter,
    VsfIconSearch: VsfIconSearch,
    VsfIconMenu: VsfIconMenu,
    VsfIconFavoritesOutline: VsfIconFavoritesOutline,
  },
  props: [
    "variant",
    "absolutePosition",
    "items",
    "withLabels",
    "basketCounterValue",
    "basketDot",
    "favouritesCounterValue",
    "favouritesDot",
    "onClick",
  ],

  data: () => ({ VsfNavbarBottomVariants }),

  computed: {
    useVariantProp() {
      return this.variant || DEFAULT_VALUES.variant;
    },
    useAbsolutePositionProp() {
      return this.absolutePosition ?? DEFAULT_VALUES.absolutePosition;
    },
    useItemsProp() {
      return this.items || DEFAULT_VALUES.items;
    },
    useWithLabelsProp() {
      return this.withLabels || DEFAULT_VALUES.withLabels;
    },
    useBasketCounterValue() {
      return this.basketCounterValue || DEFAULT_VALUES.basketCounterValue;
    },
    useBasketDot() {
      return this.basketDot ?? DEFAULT_VALUES.basketDot;
    },
    useFavouritesCounterValue() {
      return (
        this.favouritesCounterValue || DEFAULT_VALUES.favouritesCounterValue
      );
    },
    useFavouritesDot() {
      return this.favouritesDot || DEFAULT_VALUES.favouritesDot;
    },
    iconsClass() {
      return this.useVariantProp === "secondary"
        ? "text-white"
        : "text-black group-hover:text-primary-600 group-active:text-primary-700";
    },
  },

  methods: {
    onClickHandler(label) {
      this.$emit("click", label);
      this.onClick && this.onClick(label);
    },
    isIcon(name, item) {
      return item.toLowerCase() === name;
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
