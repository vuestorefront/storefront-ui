import { ref, computed } from 'vue';
import paginate from 'jw-paginate';

interface UsePaginationParameters {
  totalItems: number;
  currentPage?: number;
  pageSize?: number;
  maxPages?: number;
}

export function usePagination({ totalItems, currentPage = 1, pageSize = 10, maxPages = 1 }: UsePaginationParameters) {
  const activePage = ref(currentPage);

  const pagination = computed(() => {
    return paginate(totalItems, activePage.value, pageSize, maxPages);
  });

  return {
    totalPages: computed(() => pagination.value.totalPages),
    pages: computed(() => pagination.value.pages),
    selectedPage: computed(() => pagination.value.currentPage),
    endPage: computed(() => pagination.value.endPage),
    startPage: computed(() => pagination.value.startPage),
    maxVisiblePages: maxPages,
    next: () => (activePage.value += 1),
    prev: () => (activePage.value -= 1),
    onPageChange: (newPage: number) => (activePage.value = newPage),
  };
}
