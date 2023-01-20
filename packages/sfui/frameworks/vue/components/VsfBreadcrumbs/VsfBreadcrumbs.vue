<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref, toRefs, watch } from 'vue';
import { generateId } from '@storefront-ui/shared';
import { useWindowSize } from '@vueuse/core';
import { VsfIconHome, VsfIconMoreHorizontal, VsfIconSize } from '../VsfIcons';
import { VsfLink, VsfLinkVariant } from '../VsfLink';
import { VsfDropdownInternal } from '../VsfDropdownInternal';
import type { VsfBreadcrumbType } from './types';

const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<VsfBreadcrumbType[]>,
    default: () => [],
  },
  withIcon: {
    type: Boolean,
    default: false,
  },
  homeItemLink: {
    type: String,
    default: '/',
  },
  moreButtonAriaLabel: {
    type: String,
    default: '',
  },
  homeIconAriaLabel: {
    type: String,
    default: '',
  },
});

const { breadcrumbs } = toRefs(props);
const { width } = useWindowSize();

const visibleBreadcrumbs = ref();
const dropdownBreadcrumbs = ref();
const dropdownOpened = ref();

const sliceActiveLink = () => breadcrumbs.value.slice(breadcrumbs.value.length - 1);
const sliceRemainingLinks = () =>
  breadcrumbs.value.slice(0, breadcrumbs.value.length - visibleBreadcrumbs.value.length);

const handleButtonClick = (): void => {
  dropdownOpened.value = !dropdownOpened.value;
};

watch(
  [width] as const,
  () => {
    if (width.value < 640) {
      visibleBreadcrumbs.value = sliceActiveLink();
      dropdownBreadcrumbs.value = sliceRemainingLinks();
    } else {
      visibleBreadcrumbs.value = breadcrumbs.value;
      dropdownBreadcrumbs.value = null;
    }
  },
  { immediate: true },
);
</script>

<template>
  <nav class="vsf-breadcrumbs">
    <ol class="vsf-breadcrumbs__ol">
      <li class="vsf-breadcrumbs__item">
        <VsfDropdownInternal :model-value="dropdownOpened && dropdownBreadcrumbs">
          <template #trigger>
            <button
              v-if="width < 640"
              class="vsf-breadcrumbs__dropdown-button peer"
              :aria-label="moreButtonAriaLabel"
              @click="handleButtonClick()"
            >
              <VsfIconMoreHorizontal :size="VsfIconSize.sm" class="vsf-breadcrumbs__item-button-icon" />
            </button>
          </template>
          <ul class="vsf-breadcrumbs__dropdown-list">
            <li
              v-for="item in dropdownBreadcrumbs"
              :key="generateId(item.name)"
              class="vsf-breadcrumbs__dropdown-list-item"
              :aria-label="item.name"
            >
              <VsfLink v-bind="item.bindings" :variant="VsfLinkVariant.none"> {{ item.name }} </VsfLink>
            </li>
          </ul>
        </VsfDropdownInternal>
      </li>
      <li v-if="withIcon" class="vsf-breadcrumbs__item">
        <VsfLink :link="homeItemLink" :aria-label="homeIconAriaLabel" :variant="VsfLinkVariant.none">
          <slot name="homeButtonIcon" />
          <span v-if="!$slots.icon" class="vsf-breadcrumbs__item-button-icon--home">
            <VsfIconHome :size="VsfIconSize.sm" />
          </span>
        </VsfLink>
      </li>
      <li
        v-for="item in visibleBreadcrumbs"
        :key="generateId(item.name)"
        class="vsf-breadcrumbs__item"
        :aria-label="item.name"
      >
        <VsfLink v-bind="item.bindings" class="vsf-breadcrumbs__item-button" :variant="VsfLinkVariant.none">
          {{ item.name }}
        </VsfLink>
      </li>
    </ol>
  </nav>
</template>
