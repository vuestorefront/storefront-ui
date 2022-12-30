<script lang="ts" setup>
import paginate from 'jw-paginate';
import { ref, toRefs, computed, watch } from 'vue';
import { VsfDivider } from '../VsfDivider';
import { VsfButton, VsfButtonVariants } from '../VsfButton';
import { VsfIconChevronLeft, VsfIconChevronRight } from '../VsfIcons';

const props = defineProps({
  totalItems: {
    type: Number,
    default: null,
  },
  currentPage: {
    type: Number,
    default: null,
  },
  itemsPerPage: {
    type: Number,
    default: null,
  },
  maxVisiblePages: {
    type: Number,
    default: null,
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

const totalPages = computed(() => {
  return pagination.value.totalPages;
});

const pages = computed(() => {
  return pagination.value.pages;
});

const endPage = computed(() => {
  return pagination.value.endPage;
});

const startPage = computed(() => {
  return pagination.value.startPage;
});

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
  <nav class="vsf-pagination" role="navigation" aria-label="pagination" data-testid="pagination">
    <!-- TODO: i18n aria-label -->
    <VsfButton
      aria-label="Previous"
      :disabled="selectedPage <= 1"
      :variant="VsfButtonVariants.tertiary"
      class="vsf-pagination__button"
      data-testid="pagination-button-prev"
      @click="onPageChange((selectedPage -= 1))"
    >
      <VsfIconChevronLeft />
      <span class="vsf-pagination__button--text">Previous</span>
    </VsfButton>
    <ul class="vsf-pagination__items">
      <li v-if="!pages.find((page) => page === 1)">
        <slot name="slotPrefix">
          <div
            v-if="!$slots.slotPrefix"
            :class="[
              'vsf-pagination__item',
              {
                'vsf-pagination__item--selected': selectedPage === 1,
              },
            ]"
          >
            <!-- TODO: i18n aria-label -->
            <VsfButton
              class="vsf-pagination__button"
              :aria-label="`Page 1 of ${totalPages}`"
              :aria-current="selectedPage === 1"
              :variant="VsfButtonVariants.tertiary"
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
            :variant="VsfButtonVariants.tertiary"
            class="vsf-pagination__button vsf-pagination__button--disabled"
            data-testid="pagination-button-ellipsis-left"
          >
            ...
          </VsfButton>
        </div>
      </li>
      <slot>
        <li v-for="page in pages" :key="`page-${page}`">
          <div
            :class="[
              'vsf-pagination__item',
              {
                'vsf-pagination__item--selected': selectedPage === page,
              },
            ]"
          >
            <!-- TODO: i18n aria-label -->
            <VsfButton
              class="vsf-pagination__button"
              :aria-label="`Page ${page} of ${totalPages}`"
              :aria-current="selectedPage === page"
              :variant="VsfButtonVariants.tertiary"
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
            :variant="VsfButtonVariants.tertiary"
            class="vsf-pagination__button vsf-pagination__button--disabled"
            data-testid="pagination-button-ellipsis-right"
          >
            ...
          </VsfButton>
        </div>
      </li>
      <li v-if="!pages.find((page) => page === totalPages)">
        <slot name="slotSuffix">
          <div
            :class="[
              'vsf-pagination__item',
              {
                'vsf-pagination__item--selected': selectedPage === totalPages,
              },
            ]"
          >
            <!-- TODO: i18n aria-label -->
            <VsfButton
              class="vsf-pagination__button"
              :aria-label="`Page ${totalPages} of ${totalPages}`"
              :aria-current="totalPages === selectedPage"
              :variant="VsfButtonVariants.tertiary"
              data-testid="pagination-button-last"
              @click="onPageChange(totalPages)"
            >
              {{ totalPages }}
            </VsfButton>
          </div>
        </slot>
      </li>
    </ul>
    <!-- TODO: i18n aria-label -->
    <VsfButton
      aria-label="Next"
      :disabled="selectedPage >= totalPages"
      :variant="VsfButtonVariants.tertiary"
      class="vsf-pagination__button"
      data-testid="pagination-button-next"
      @click="onPageChange((selectedPage += 1))"
    >
      <span class="vsf-pagination__button--text">Next</span>
      <VsfIconChevronRight />
    </VsfButton>
  </nav>
</template>
