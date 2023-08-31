---
repoPath: /hooks/usePagination.md
layout: AtomLayout
hideBreadcrumbs: true
description: An easy to use function for creating pagination.
---

# usePagination

:::::: slot usage

The `usePagination` allows you to add logic to your pagination UI. With this composable  you can add methods for moving to the next/previous page or to the exact page by passing its number. To calculate how many pages are needed to be displayed the only required parameter is the total number of items. There can be also passed additional parameters to adjust pagination according to your needs.

::: read-more
Under the hood, this composable uses `jw-paginate`. To learn more about this specific implementation visit the [jw-paginate docs](https://jasonwatmore.com/post/2018/08/07/javascript-pure-pagination-logic-in-vanilla-js-typescript).
:::

## Usage



```vue
<script lang="ts" setup>
import { usePagination, SfIconChevronRight, SfIconChevronLeft, SfButton } from '@storefront-ui/vue';

const { totalPages, pages, selectedPage, startPage, endPage, next, prev, setPage, maxVisiblePages } = usePagination({
  totalItems: 150
});
</script>

<template>
<nav class="flex justify-between border-t border-neutral-200" role="navigation" aria-label="pagination">
    {{ totalPages }}
    <SfButton
      type="button"
      aria-label="Go to previous page"
      :disabled="selectedPage <= 1"
      variant="tertiary"
      @click="prev"
    >
      <template #prefix>
        <SfIconChevronLeft />
      </template>
    </SfButton>
    <ul class="flex justify-center">
      <li v-if="!pages.find((page) => page === 1)">
        <div
          :class="[
            'flex pt-1 border-t-4 border-transparent',
            { 'font-medium border-t-4 !border-primary-500': selectedPage === 1 },
          ]"
        >
          <button
            type="button"
            class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
            :aria-current="selectedPage === 1"
            @click="setPage(1)"
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
            @click="setPage(endPage - 1)"
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
            @click="setPage(page)"
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
            @click="setPage(2)"
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
            @click="setPage(totalPages)"
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
      @click="next"
    >
      <template #suffix>
        <SfIconChevronRight />
      </template>
    </SfButton>
  </nav>
</template>
```

::::::

::: slot api

## Parameters

Listed parameters should be passed as object.

| Name        | Type                  | Default value | Description                                  |
| ---------   | --------------------- | ------------- | -------------------------------------------  |
| totalItems\*  | `number`            |               | total number of items to be be displayed    |
| currentPage   | `number`            |  `1`          | current active page                       |
| pageSize      | `number`            |  `10`         | number of items per page                  |
| maxPages      | `number`            |  `1`          | maximum number of pages to display**       |

**there is an additional page displayed when the default number (`1`) is passed. When the current number is `1` then page `2` and the last pages are visible. When the penultimate page is the current one then pages `1` and the last one are visible.
 

## Return value

| Name            | Type              | Default value | Description                                        |
| ---------        | --------------   | ------------- | -------------------------------------------        |
| totalPages       | `number`           |               | total number of pages                              |
| maxVisiblePages  | `number`           |               | total number of pages                              |
| itemsPerPage     | `number`           |               | total number of pages                              |
| pages            | `number[]`         |               | array of displayed pages                           |
| selectedPage     | `number`           |               | current page                                       |
| endPage          | `number`           |               | number of the last page from displayed pages       |
| startPage        | `number`           |               | number of the first page from displayed pages      |
| next             | `function`         |               | triggers jump to next page                         |
| prev             | `function`         |               | triggers jump to previous page                     |
| setPage     | `function`         |               | triggers jump to page number passed as parameter   |

:::

::: slot source
<SourceCode>

<<<../../../packages/sfui/frameworks/vue/composables/usePagination/usePagination.ts

</SourceCode>
:::
