<template>
  <nav
    ref="nav"
    class="inline-flex items-center"
  >
    <ol class="flex w-auto text-sm font-normal leading-none text-gray-500 font-body">
      <li class="relative">
        <button
          v-if="showDots"
          v-focus
          class="flex leading-5 relative peer after:content-['/'] after:mx-2 outline-violet rounded-sm"
          aria-label="Show previous categories"
          @click="dropdownOpened = true"
        >
          <svg
            class="hover:fill-primary-600 fill-gray-500"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14C10.8965 14 10 13.1035 10 12C10 10.8965 10.8965 10 12 10C13.1035 10 14 10.8965 14 12C14 13.1035 13.1035 14 12 14ZM16 12C16 13.1035 16.8965 14 18 14C19.1035 14 20 13.1035 20 12C20 10.8965 19.1035 10 18 10C16.8965 10 16 10.8965 16 12ZM8 12C8 10.8965 7.1035 10 6 10C4.8965 10 4 10.8965 4 12C4 13.1035 4.8965 14 6 14C7.1035 14 8 13.1035 8 12Z" />
          </svg>
        </button>
        <ul
          ref="dropdown"
          :class="dropdownOpened ? 'flex' : 'hidden'"
          class="bg-white rounded-md shadow-md p-[16px] absolute top-100 left-0 flex-col text-base text-gray-900"
        >
          <li
            v-for="({name, link}, i) in dropdownList"
            :key="i + name"
            :aria-label="name"
            class="py-2"
          >
            <a
              v-focus
              :href="link"
              class="leading-5 align-middle rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
            >
              {{ name }}
            </a>
          </li>
        </ul>
      </li>
      <li
        v-if="!showDots && withIcon"
        aria-label="Home"
        class="relative breadcrumb-item"
      >
        <a
          v-focus
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
            />
          </svg>
        </a>
      </li>
      <li
        v-for="({name, link}, i) in breadcrumbsList"
        :key="name + i"
        :aria-label="name"
        class="relative breadcrumb-item"
      >
        <a
          v-focus
          :href="link"
          class="leading-5 rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
        >{{ name }}</a>
      </li>
    </ol>
  </nav>
</template>
<script>
import { ref, watch, computed } from '@nuxtjs/composition-api';
import { useElementSize, useWindowSize, onClickOutside } from '@vueuse/core';
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'BreadcrumbsBase',
  directives: {
    focus
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    },
    withIcon: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const nav = ref(null);
    const { width: windowWidth } = useWindowSize();
    const { width: breadcrumbsWidth } = useElementSize(nav);
    const dropdown = ref(null);
    const dropdownOpened = ref(false);
    const padding = 40;
    const breadcrumbsList = ref([...props.breadcrumbs]);
    const dropdownList = ref([]);
    const firstBreadcrumbItem = computed(() => nav.value?.children[0]?.children[1]?.clientWidth);
    const firstElementWidth = ref(0);
    const showDots = computed(() => breadcrumbsList.value.length !== props.breadcrumbs.length);

    onClickOutside(dropdown, () => dropdownOpened.value = false);

    watch(windowWidth, (newWindowWidth) => {
      if (newWindowWidth <= (breadcrumbsWidth.value + padding)) {
        const removedItemFromBreadcrumbs = breadcrumbsList.value.shift();
        if (removedItemFromBreadcrumbs) {
          dropdownList.value.unshift(removedItemFromBreadcrumbs);
        }
      }
      if (newWindowWidth - padding > (breadcrumbsWidth.value + firstElementWidth.value + padding)) {
        if (firstElementWidth.value !== firstBreadcrumbItem.value) {
          firstElementWidth.value = firstBreadcrumbItem.value;
        }
        const removedItemFromDropdown = dropdownList.value.shift();
        if (removedItemFromDropdown) {
          breadcrumbsList.value.unshift(removedItemFromDropdown);
        }
      }
    });

    return {
      nav,
      showDots,
      breadcrumbsList,
      dropdownList,
      dropdownOpened,
      dropdown
    };
  }
};
</script>
<style scoped>
.breadcrumb-item:nth-of-type(1n+3) {
  @apply before:content-['/'] before:mx-2;
}
.breadcrumb-item:last-child > a {
  @apply font-medium text-gray-900 no-underline;
}
</style>
