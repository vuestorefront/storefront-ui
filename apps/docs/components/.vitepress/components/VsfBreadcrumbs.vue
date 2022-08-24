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
              <svg
                class="hover:fill-primary-600 fill-gray-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 14C10.8965 14 10 13.1035 10 12C10 10.8965 10.8965 10 12 10C13.1035 10 14 10.8965 14 12C14 13.1035 13.1035 14 12 14ZM16 12C16 13.1035 16.8965 14 18 14C19.1035 14 20 13.1035 20 12C20 10.8965 19.1035 10 18 10C16.8965 10 16 10.8965 16 12ZM8 12C8 10.8965 7.1035 10 6 10C4.8965 10 4 10.8965 4 12C4 13.1035 4.8965 14 6 14C7.1035 14 8 13.1035 8 12Z"
                ></path>
              </svg>
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

          <template v-if="!slotIcon">
            <a
              href="/"
              class="leading-5 rounded-sm whitespace-nowrap hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-gray-500 hover:fill-primary-600 active:fill-gray-900"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.41083 1.91107C9.73626 1.58563 10.2639 1.58563 10.5893 1.91107L18.0893 9.41107C18.4148 9.73651 18.4148 10.2641 18.0893 10.5896C17.7639 10.915 17.2363 10.915 16.9108 10.5896L16.6667 10.3455V16.667C16.6667 17.5875 15.9206 18.3337 15.0001 18.3337H5.00008C4.07961 18.3337 3.33341 17.5875 3.33341 16.667V10.3455L3.08934 10.5896C2.7639 10.915 2.23626 10.915 1.91083 10.5896C1.58539 10.2641 1.58539 9.73651 1.91083 9.41107L9.41083 1.91107ZM5.00008 8.67884V16.667H7.50008V13.3337C7.50008 12.4132 8.24627 11.667 9.16675 11.667H10.8334C11.7539 11.667 12.5001 12.4132 12.5001 13.3337V16.667H15.0001V8.67884L10.0001 3.67884L5.00008 8.67884ZM10.8334 16.667V13.3337H9.16675V16.667H10.8334Z"
                ></path>
              </svg>
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
<script>
import { defineAsyncComponent } from "vue";

const DEFAULT_VALUES = {
  breadcrumbs: [],
  withIcon: false,
};

export default {
  name: "vsf-breadcrumbs",

  props: ["breadcrumbs", "withIcon", "slotIcon"],

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
