<template>
  <nav class="inline-flex items-center" ref="navRef">
    <ol
      class="flex w-auto text-sm font-normal leading-none text-gray-500 font-body"
    >
      <li class="relative">
        <template v-if="showDots">
          <div>
            <button
              class="flex leading-5 relative peer after:content-['/'] after:mx-2 outline-violet rounded-sm"
              aria-label="Show previous categories"
              @click="handleButtonClick($event)"
            >
              <vsf-icon-more-horizontal
                size="sm"
                class="hover:text-primary-600 text-gray-500"
              ></vsf-icon-more-horizontal>
            </button>

            <template v-if="dropdownOpened">
              <ul
                ref="dropdownRef"
                :class="
                  _classStringToObject(
                    `bg-white rounded-md shadow-md p-[16px] absolute top-100 left-0 flex-col text-base text-gray-900 z-10`
                  )
                "
              >
                <template :key="index" v-for="(item, index) in dropdownList">
                  <li class="py-2" :aria-label="item.name">
                    <a
                      class="leading-5 align-middle rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
                      :href="item.link"
                    >
                      {{ item.name }}
                    </a>
                  </li>
                </template>
              </ul>
            </template>
          </div>
        </template>
      </li>

      <template v-if="!showDots && useWithIconProp">
        <li aria-label="Home" class="relative breadcrumb-item">
          <slot name="icon" />

          <template v-if="!$slots.icon">
            <a
              href="/"
              class="leading-5 rounded-sm whitespace-nowrap hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
            >
              <vsf-icon-home
                class="fill-gray-500 hover:text-primary-600 active:text-gray-900"
              ></vsf-icon-home>
            </a>
          </template>
        </li>
      </template>

      <template :key="index" v-for="(item, index) in breadcrumbsList">
        <li class="relative breadcrumb-item" :aria-label="item.name">
          <a
            class="leading-5 rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
            :href="item.link"
          >
            {{ item.name }}
          </a>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script lang="ts">
export type VsfBreadcrumbType = {
  name: string;
  link: string;
};
export interface VsfBreadcrumbsProps {
  breadcrumbs?: VsfBreadcrumbType[];
  withIcon?: boolean;
  slotIcon?: any;
}

import VsfIconHome from "../VsfIcons/VsfIconHome";
import VsfIconMoreHorizontal from "../VsfIcons/VsfIconMoreHorizontal";
const DEFAULT_VALUES = {
  breadcrumbs: [],
  withIcon: false,
};

export default {
  name: "vsf-breadcrumbs",
  components: {
    VsfIconMoreHorizontal: VsfIconMoreHorizontal,
    VsfIconHome: VsfIconHome,
  },
  props: ["breadcrumbs", "withIcon"],

  data: () => ({
    breadcrumbsList: [],
    dropdownOpened: false,
    dropdownList: [],
    firstElementWidth: 0,
    newWindowWidth: 0,
  }),

  mounted() {
    // TODO ssr support
    this.breadcrumbsList = this.useBreadcrumbsProp.slice(0);
    this.newWindowWidth = window.innerWidth;
    document.addEventListener("click", this.handleDropdownClickOutside, true);
    window.addEventListener("resize", this.onWindowResize);
  },

  watch: {
    onUpdateHook0() {
      this.breadcrumbsList = this.useBreadcrumbsProp.slice(0);
      this.newWindowWidth = window.innerWidth;
    },
    onUpdateHook1() {
      const breadcrumbsWidthVal = this.breadcrumbsWidth(),
        firstBreadcrumbItemVal = this.firstBreadcrumbItem(),
        offsetLeftVal = this.offsetLeft();

      if (
        this.newWindowWidth <=
        breadcrumbsWidthVal + this.padding + offsetLeftVal
      ) {
        const removedItemFromBreadcrumbs = this.breadcrumbsList[0];

        if (removedItemFromBreadcrumbs) {
          this.breadcrumbsList = this.breadcrumbsList.slice(1);
          this.dropdownList = [
            removedItemFromBreadcrumbs,
            ...this.dropdownList,
          ];
        }
      }

      if (
        this.newWindowWidth - this.padding >
        breadcrumbsWidthVal +
          this.firstElementWidth +
          this.padding +
          offsetLeftVal
      ) {
        if (this.firstElementWidth !== firstBreadcrumbItemVal) {
          this.firstElementWidth = firstBreadcrumbItemVal;
        }

        const removedItemFromDropdown = this.dropdownList[0];

        if (removedItemFromDropdown) {
          this.dropdownList = this.dropdownList.slice(1);
          this.breadcrumbsList = [
            removedItemFromDropdown,
            ...this.breadcrumbsList,
          ];
        }
      }
    },
  },
  unmounted() {
    document.removeEventListener(
      "click",
      this.handleDropdownClickOutside,
      true
    );
    window.removeEventListener("resize", this.onWindowResize);
  },

  computed: {
    useBreadcrumbsProp() {
      return this.breadcrumbs || DEFAULT_VALUES.breadcrumbs;
    },
    useWithIconProp() {
      return this.withIcon || DEFAULT_VALUES.withIcon;
    },
    showDots() {
      return this.breadcrumbsList.length !== this.useBreadcrumbsProp.length;
    },
    padding() {
      //TODO: use css-variable when tokens migrated
      return 40;
    },
    onUpdateHook0() {
      return {
        0: this.breadcrumbs,
      };
    },
    onUpdateHook1() {
      return {
        0: this.newWindowWidth,
      };
    },
  },

  methods: {
    firstBreadcrumbItem() {
      return this.$refs.navRef?.children[0]?.children[1]?.clientWidth || 0;
    },
    breadcrumbsWidth() {
      return this.$refs.navRef?.offsetWidth || 0;
    },
    offsetLeft() {
      return this.$refs.navRef?.offsetLeft || 0;
    },
    handleDropdownClickOutside(e) {
      if (!this.$refs.dropdownRef?.contains(e.target)) {
        this.dropdownOpened = false;
      }
    },
    handleButtonClick(e) {
      e.stopPropagation();
      this.dropdownOpened = true;
    },
    onWindowResize() {
      this.newWindowWidth = window.innerWidth;
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
