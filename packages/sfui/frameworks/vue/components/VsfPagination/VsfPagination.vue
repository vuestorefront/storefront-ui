<script lang="ts" setup>
import paginate from 'jw-paginate';
import type { PropType } from 'vue';
import { ref, toRefs, computed, watch } from 'vue';
import { VsfDivider } from '../VsfDivider';
import { VsfButton, VsfButtonVariant } from '../VsfButton';
import { VsfIconChevronLeft, VsfIconChevronRight } from '../VsfIcons';

const props = defineProps({
  totalItems: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 0,
  },
  itemsPerPage: {
    type: Number,
    default: 0,
  },
  maxVisiblePages: {
    type: Number,
    default: 0,
  },
  prev: {
    type: String,
    default: 'Previous',
  },
  next: {
    type: String,
    default: 'Next',
  },
  hideButtonLabels: {
    type: Boolean,
    default: false,
  },
  ariaLabelButton: {
    type: Function as PropType<(page: number, totalPages: number) => string>,
    default: (page: number, totalPages: number) => `Page ${page} of ${totalPages}`,
  },
});

const emits = defineEmits<{
  (event: 'update:current-page', page: number): void;
}>();

const { totalItems, currentPage, itemsPerPage, maxVisiblePages } = toRefs(props);
const selectedPage = ref(0);

const pagination = computed(() => {
  return paginate(totalItems.value, selectedPage.value, itemsPerPage.value, maxVisiblePages.value);
});

const totalPages = computed(() => pagination.value.totalPages);
const pages = computed(() => pagination.value.pages);
const endPage = computed(() => pagination.value.endPage);
const startPage = computed(() => pagination.value.startPage);

watch(
  currentPage,
  (currentPage) => {
    selectedPage.value = currentPage;
  },
  { immediate: true },
);

const onPageChange = (newPage: number) => {
  selectedPage.value = newPage;
  emits('update:current-page', selectedPage?.value);
};
</script>

<template>
  <VsfDivider />
  <nav class="vsf-pagination" role="navigation" aria-label="pagination" data-testid="pagination" v-bind="$attrs">
    <slot name="previous-button">
      <VsfButton
        :aria-label="prev"
        :disabled="selectedPage <= 1"
        :variant="VsfButtonVariant.tertiary"
        class="vsf-pagination__button"
        data-testid="pagination-button-prev"
        @click="onPageChange((selectedPage -= 1))"
      >
        <VsfIconChevronLeft />
        <span v-if="!hideButtonLabels" class="vsf-pagination__button--text" data-testid="pagination-label-prev">
          {{ prev }}
        </span>
      </VsfButton>
    </slot>
    <ul class="vsf-pagination__items">
      <li v-if="!pages.find((page) => page === 1)">
        <slot name="slotPrefix">
          <div
            v-if="!$slots.slotPrefix"
            :class="['vsf-pagination__item', { 'vsf-pagination__item--selected': selectedPage === 1 }]"
          >
            <VsfButton
              class="vsf-pagination__button"
              :aria-label="ariaLabelButton(1, totalPages)"
              :aria-current="selectedPage === 1"
              :variant="VsfButtonVariant.tertiary"
              data-testid="pagination-button-first"
              @click="onPageChange(1)"
            >
              1
            </VsfButton>
          </div>
        </slot>
      </li>
      <li v-if="startPage >= 2">
        <div class="vsf-pagination__item">
          <VsfButton
            disabled
            aria-hidden="true"
            :variant="VsfButtonVariant.tertiary"
            class="vsf-pagination__button vsf-pagination__button--disabled"
            data-testid="pagination-button-ellipsis-left"
          >
            ...
          </VsfButton>
        </div>
      </li>
      <slot>
        <li v-for="page in pages" :key="`page-${page}`">
          <div :class="['vsf-pagination__item', { 'vsf-pagination__item--selected': selectedPage === page }]">
            <VsfButton
              class="vsf-pagination__button"
              :aria-label="ariaLabelButton(page, totalPages)"
              :aria-current="selectedPage === page"
              :variant="VsfButtonVariant.tertiary"
              :data-testid="`pagination-button-visible-${page}`"
              @click="onPageChange(page)"
            >
              {{ page }}
            </VsfButton>
          </div>
        </li>
      </slot>
      <li v-if="endPage <= totalPages - 1">
        <div class="vsf-pagination__item">
          <VsfButton
            disabled
            aria-hidden="true"
            :variant="VsfButtonVariant.tertiary"
            class="vsf-pagination__button vsf-pagination__button--disabled"
            data-testid="pagination-button-ellipsis-right"
          >
            ...
          </VsfButton>
        </div>
      </li>
      <li v-if="!pages.find((page) => page === totalPages)">
        <slot name="slotSuffix">
          <div :class="['vsf-pagination__item', { 'vsf-pagination__item--selected': selectedPage === totalPages }]">
            <VsfButton
              class="vsf-pagination__button"
              :aria-label="ariaLabelButton(totalPages, totalPages)"
              :aria-current="totalPages === selectedPage"
              :variant="VsfButtonVariant.tertiary"
              data-testid="pagination-button-last"
              @click="onPageChange(totalPages)"
            >
              {{ totalPages }}
            </VsfButton>
          </div>
        </slot>
      </li>
    </ul>
    <slot name="next-button">
      <VsfButton
        :aria-label="next"
        :disabled="selectedPage >= totalPages"
        :variant="VsfButtonVariant.tertiary"
        class="vsf-pagination__button"
        data-testid="pagination-button-next"
        @click="onPageChange((selectedPage += 1))"
      >
        <span v-if="!hideButtonLabels" class="vsf-pagination__button--text" data-testid="pagination-label-next">
          {{ next }}
        </span>
        <VsfIconChevronRight />
      </VsfButton>
    </slot>
  </nav>
</template>
