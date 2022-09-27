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
          <template v-if="item.tag === 'link'">
            <a
              :href="item.link"
              :aria-label="!useWithLabelsProp ? `Go to ${item.label}` : null"
              :class="
                _classStringToObject(
                  `${
                    useVariantProp === 'primary'
                      ? 'hover:bg-primary-100 active:bg-primary-100'
                      : 'hover:bg-primary-600 active:bg-primary-600'
                  } flex flex-col items-center justify-center flex-1 pt-3 pb-1 group`
                )
              "
            >
              <span
                :class="
                  _classStringToObject(
                    `${
                      useVariantProp === 'secondary'
                        ? 'text-white'
                        : 'text-primary-500'
                    }`
                  )
                "
              >
                <template v-if="item.icon.toLowerCase() === 'home'">
                  <vsf-icon-home></vsf-icon-home>
                </template>

                <template v-if="item.icon.toLowerCase() === 'basket'">
                  <vsf-icon-basket></vsf-icon-basket>
                </template>

                <template v-if="item.icon.toLowerCase() === 'search'">
                  <vsf-icon-search></vsf-icon-search>
                </template>

                <template v-if="item.icon.toLowerCase() === 'menu'">
                  <vsf-icon-menu></vsf-icon-menu>
                </template>

                <template v-if="item.icon.toLowerCase() === 'favorites'">
                  <vsf-icon-favorites-outline></vsf-icon-favorites-outline>
                </template>
              </span>

              <template v-if="useWithLabelsProp">
                <span
                  :class="
                    _classStringToObject(
                      `${
                        useVariantProp === 'primary'
                          ? 'text-primary-500 group-hover:text-primary-600 group-active:text-primary-600'
                          : 'text-white'
                      } text-xs mt-[2px] font-medium`
                    )
                  "
                >
                  {{ item.label }}
                </span>
              </template>
            </a>
          </template>

          <template v-else>
            <button
              :aria-label="!useWithLabelsProp ? `Go to ${item.label}` : null"
              @click="onClickHandler(item.label)"
              :class="
                _classStringToObject(
                  `${
                    useVariantProp === 'primary'
                      ? 'hover:bg-primary-100 active:bg-primary-100'
                      : 'hover:bg-primary-600 active:bg-primary-600'
                  } flex flex-col items-center justify-center flex-1 pt-3 pb-1 group`
                )
              "
            >
              <span
                :class="
                  _classStringToObject(
                    `${
                      useVariantProp === 'secondary'
                        ? 'text-white'
                        : 'text-primary-500'
                    }`
                  )
                "
              >
                <template v-if="item.icon.toLowerCase() === 'home'">
                  <vsf-icon-home></vsf-icon-home>
                </template>

                <template v-if="item.icon.toLowerCase() === 'basket'">
                  <vsf-icon-basket></vsf-icon-basket>
                </template>

                <template v-if="item.icon.toLowerCase() === 'search'">
                  <vsf-icon-search></vsf-icon-search>
                </template>

                <template v-if="item.icon.toLowerCase() === 'menu'">
                  <vsf-icon-menu></vsf-icon-menu>
                </template>

                <template v-if="item.icon.toLowerCase() === 'favorites'">
                  <vsf-icon-favorites-outline></vsf-icon-favorites-outline>
                </template>
              </span>

              <template v-if="useWithLabelsProp">
                <span
                  :class="
                    _classStringToObject(
                      `${
                        useVariantProp === 'primary'
                          ? 'text-primary-500 group-hover:text-primary-600 group-active:text-primary-600'
                          : 'text-white'
                      } text-xs mt-[2px] font-medium`
                    )
                  "
                >
                  {{ item.label }}
                </span>
              </template>
            </button>
          </template>
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
  onClick?: (...args: any[]) => void;
}

import VsfIconHome from "../VsfIcons/VsfIconHome.vue";
import VsfIconBasket from "../VsfIcons/VsfIconBasket.vue";
import VsfIconSearch from "../VsfIcons/VsfIconSearch.vue";
import VsfIconMenu from "../VsfIcons/VsfIconMenu.vue";
import VsfIconFavoritesOutline from "../VsfIcons/VsfIconFavoritesOutline.vue";
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
    "vsf-icon-home": VsfIconHome,
    "vsf-icon-basket": VsfIconBasket,
    "vsf-icon-search": VsfIconSearch,
    "vsf-icon-menu": VsfIconMenu,
    "vsf-icon-favorites-outline": VsfIconFavoritesOutline,
  },
  props: ["variant", "absolutePosition", "items", "withLabels", "onClick"],

  data: () => ({ VsfNavbarBottomVariants }),

  computed: {
    useVariantProp() {
      return this.variant || DEFAULT_VALUES.variant;
    },
    useAbsolutePositionProp() {
      return this.absolutePosition || DEFAULT_VALUES.absolutePosition;
    },
    useItemsProp() {
      return this.items || DEFAULT_VALUES.items;
    },
    useWithLabelsProp() {
      return this.withLabels || DEFAULT_VALUES.withLabels;
    },
  },

  methods: {
    onClickHandler(label) {
      this.$emit("click", label);
      this.onClick && this.onClick(label);
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
