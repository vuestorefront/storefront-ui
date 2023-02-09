<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref } from 'vue';
import { generateId } from '@storefront-ui/shared';
import { VsfIconHome, VsfIconMoreHorizontal, VsfIconSize } from '../VsfIcons';
import { VsfLink, VsfLinkVariant } from '../VsfLink';
import { VsfDropdownInternal, VsfDropdownInternalPlacement } from '../VsfDropdownInternal';
import type { VsfBreadcrumbType } from './types';

defineProps({
  breadcrumbs: {
    type: Array as PropType<VsfBreadcrumbType[]>,
    default: () => [],
  },
  withIcon: {
    type: Boolean,
    default: false,
  },
  ariaLabelHomeIcon: {
    type: String,
    default: '',
  },
  ariaLabelHomeButton: {
    type: String,
    default: '',
  },
});
const dropdownOpened = ref();
</script>

<template>
  <nav class="vsf-breadcrumbs">
    <ol class="vsf-breadcrumbs__ol">
      <li class="vsf-breadcrumbs__item">
        <VsfDropdownInternal v-model="dropdownOpened" :placement="VsfDropdownInternalPlacement['bottom-start']">
          <template #trigger>
            <button class="vsf-breadcrumbs__dropdown-button" :aria-label="ariaLabelHomeButton">
              <VsfIconMoreHorizontal :size="VsfIconSize.sm" class="vsf-breadcrumbs__item-link-icon" />
            </button>
          </template>
          <ul class="vsf-breadcrumbs__dropdown-list">
            <li
              v-for="item in breadcrumbs"
              :key="generateId(item.name)"
              class="vsf-breadcrumbs__dropdown-list-item"
              :aria-label="item.name"
            >
              <VsfLink :link="item.link" :variant="VsfLinkVariant.none"> {{ item.name }} </VsfLink>
            </li>
          </ul>
        </VsfDropdownInternal>
      </li>
      <li v-for="item in breadcrumbs" :key="generateId(item.name)" class="vsf-breadcrumbs__item">
        <VsfLink
          v-if="withIcon && breadcrumbs.indexOf(item) === 0"
          :link="item.link"
          :aria-label="ariaLabelHomeIcon"
          :variant="VsfLinkVariant.none"
        >
          <slot name="homeButtonIcon" />
          <span v-if="!$slots.icon" class="vsf-breadcrumbs__item-link-icon--home">
            <VsfIconHome :size="VsfIconSize.sm" />
          </span>
        </VsfLink>
        <VsfLink v-else :link="item.link" class="vsf-breadcrumbs__item-link" :variant="VsfLinkVariant.none">
          {{ item.name }}
        </VsfLink>
      </li>
    </ol>
  </nav>
</template>
