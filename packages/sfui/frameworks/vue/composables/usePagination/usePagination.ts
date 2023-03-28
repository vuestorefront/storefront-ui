import { ref, computed } from 'vue';
import paginate from 'jw-paginate';

export function usePagination(totalItems: number, currentPage = 1, pageSize = 10, maxPages = 1) {
  const activePage = ref(currentPage);

  const pagination = computed(() => {
    return paginate(totalItems, activePage.value, pageSize, maxPages);
  });

  const next = () => (activePage.value += 1);

  const prev = () => (activePage.value -= 1);

  const onPageChange = (newPage: number) => (activePage.value = newPage);

  return {
    totalPages: computed(() => pagination.value.totalPages),
    pages: computed(() => pagination.value.pages),
    selectedPage: computed(() => pagination.value.currentPage),
    endPage: computed(() => pagination.value.endPage),
    startPage: computed(() => pagination.value.startPage),
    maxVisiblePages: maxPages,
    next,
    prev,
    onPageChange,
  };
}
