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
    const showDots = computed(() => breadcrumbsList.value.length === props.breadcrumbs.length ? false : true);

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
