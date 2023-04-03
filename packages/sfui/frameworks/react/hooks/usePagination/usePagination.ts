import { useState, useEffect } from 'react';
import paginate from 'jw-paginate';

interface UsePaginationParameters {
  totalItems: number;
  currentPage?: number;
  pageSize?: number;
  maxPages?: number;
}

export function usePagination({ totalItems, currentPage = 1, pageSize = 10, maxPages = 1 }: UsePaginationParameters) {
  const [pagination, setPagination] = useState(paginate(totalItems, currentPage, pageSize, maxPages));
  const [selectedPage, setSelectedPage] = useState(currentPage);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setPagination(paginate(totalItems, selectedPage, pageSize, maxPages));
  }, [totalItems, selectedPage, pageSize, maxPages]);

  const onPageChange = (page: number) => {
    setSelectedPage(page);
  };

  const next = () => {
    setSelectedPage((pagination.currentPage += 1));
  };

  const prev = () => {
    setSelectedPage((pagination.currentPage -= 1));
  };

  return {
    totalPages: pagination.totalPages,
    maxVisiblePages: maxPages,
    itemsPerPage: pageSize,
    pages: pagination.pages,
    selectedPage,
    endPage: pagination.endPage,
    startPage: pagination.startPage,
    next,
    prev,
    onPageChange,
  };
}
