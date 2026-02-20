import { ref, computed, toValue, type MaybeRefOrGetter, isRef } from 'vue';
import paginate from 'jw-paginate';
import { syncRefs } from '@vueuse/core';

interface UsePaginationParameters {
  totalItems: MaybeRefOrGetter<number>;
  currentPage?: MaybeRefOrGetter<number>;
  pageSize?: MaybeRefOrGetter<number>;
  maxPages?: MaybeRefOrGetter<number>;
}

export function usePagination({ totalItems, currentPage = 1, pageSize = 10, maxPages = 1 }: UsePaginationParameters) {
  const activePage = ref(toValue(currentPage));

  if (isRef(currentPage)) syncRefs(currentPage, activePage);

  const pagination = computed(() => {
    return paginate(toValue(totalItems), activePage.value, toValue(pageSize), toValue(maxPages));
  });

  return {
    totalPages: computed(() => pagination.value.totalPages),
    maxVisiblePages: computed(() => toValue(maxPages)),
    itemsPerPage: computed(() => toValue(pageSize)),
    pages: computed(() => pagination.value.pages),
    selectedPage: computed(() => pagination.value.currentPage),
    endPage: computed(() => pagination.value.endPage),
    startPage: computed(() => pagination.value.startPage),
    next: () => (activePage.value += 1),
    prev: () => (activePage.value -= 1),
    setPage: (newPage: number) => (activePage.value = newPage),
  };
}
