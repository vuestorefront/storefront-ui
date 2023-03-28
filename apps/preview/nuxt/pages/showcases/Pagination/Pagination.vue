<template>
  <nav class="flex justify-between border-t border-neutral-200" role="navigation" aria-label="pagination">
    <SfButton
      type="button"
      aria-label="Go to previous page"
      :disabled="selectedPage <= 1"
      variant="tertiary"
      class="gap-3"
      @click="prev"
    >
      <template #prefix>
        <SfIconChevronLeft />
      </template>
      <span class="hidden sm:inline-flex"> Previous </span>
    </SfButton>
    <ul class="flex justify-center">
      <li v-if="!pages.find((page) => page === 1)">
        <div
          :class="[
            'flex pt-1  border-t-4 border-transparent',
            { 'font-medium border-t-4 !border-primary-500': selectedPage === 1 },
          ]"
        >
          <button
            type="button"
            class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
            :aria-current="selectedPage === 1"
            @click="onPageChange(1)"
          >
            1
          </button>
        </div>
      </li>
      <li v-if="startPage > 2">
        <div class="flex pt-1 border-t-4 border-transparent">
          <button type="button" disabled aria-hidden="true" class="px-4 py-3 rounded-md text-neutral-500">...</button>
        </div>
      </li>
      <li v-if="maxVisiblePages === 1 && selectedPage === totalPages">
        <div class="flex pt-1 border-t-4 border-transparent">
          <button
            type="button"
            class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
            :aria-current="endPage - 1 === selectedPage"
            @click="onPageChange(endPage - 1)"
          >
            {{ endPage - 1 }}
          </button>
        </div>
      </li>
      <li v-for="page in pages" :key="`page-${page}`">
        <div
          :class="[
            'flex pt-1 border-t-4 border-transparent ',
            { 'font-medium border-t-4 !border-primary-500': selectedPage === page },
          ]"
        >
          <button
            type="button"
            :class="[
              ' px-4 py-3 text-neutral-500 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ',
              { '!text-neutral-900 hover:!text-primary-800 active:!text-primary-900': selectedPage === page },
            ]"
            :aria-label="`Page ${page} of ${totalPages}`"
            :aria-current="selectedPage === page"
            @click="onPageChange(page)"
          >
            {{ page }}
          </button>
        </div>
      </li>
      <li v-if="maxVisiblePages === 1 && selectedPage === 1">
        <div class="flex pt-1 border-t-4 border-transparent">
          <button
            type="button"
            class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
            :aria-label="`Page 2 of ${totalPages}`"
            @click="onPageChange(2)"
          >
            2
          </button>
        </div>
      </li>
      <li v-if="endPage < totalPages - 1">
        <div class="flex pt-1 border-t-4 border-transparent">
          <button type="button" disabled aria-hidden="true" class="px-4 py-3 rounded-md text-neutral-500">...</button>
        </div>
      </li>
      <li v-if="!pages.find((page) => page === totalPages)">
        <div
          :class="[
            'flex pt-1 border-t-4 border-transparent ',
            { 'font-medium border-t-4 !border-primary-500': selectedPage === totalPages },
          ]"
        >
          <button
            type="button"
            class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
            :aria-current="totalPages === selectedPage"
            @click="onPageChange(totalPages)"
          >
            {{ totalPages }}
          </button>
        </div>
      </li>
    </ul>
    <SfButton
      type="button"
      aria-label="Go to next page"
      :disabled="selectedPage >= totalPages"
      variant="tertiary"
      class="gap-3"
      @click="next"
    >
      <span class="hidden sm:inline-flex"> Next </span>
      <template #suffix>
        <SfIconChevronRight />
      </template>
    </SfButton>
  </nav>
</template>

<script lang="ts" setup>
import { SfButton, SfIconChevronLeft, SfIconChevronRight, usePagination } from '@storefront-ui/vue';

const { totalPages, pages, selectedPage, startPage, endPage, next, prev, onPageChange, maxVisiblePages } =
  usePagination(150);
</script>
