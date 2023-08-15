/* eslint-disable no-return-assign */
import { useState, useEffect } from 'react';
import paginate from 'jw-paginate';

interface UsePaginationParameters {
  totalItems: number;
  currentPage?: number;
  pageSize?: number;
  maxPages?: number;
  handler?: (currentPage?: number) => void;
}

export function usePagination({
  totalItems,
  currentPage = 1,
  pageSize = 10,
  maxPages = 1,
  handler,
}: UsePaginationParameters) {
  const [pagination, setPagination] = useState(paginate(totalItems, currentPage, pageSize, maxPages));
  const [selectedPage, setSelectedPage] = useState(currentPage);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setPagination(paginate(totalItems, selectedPage, pageSize, maxPages));
  }, [totalItems, selectedPage, pageSize, maxPages]);

  const handlePageChange = (page: number) => {
    setSelectedPage(page);
    if (handler) {
      handler(page);
    }
  };

  return {
    totalPages: pagination.totalPages,
    maxVisiblePages: maxPages,
    itemsPerPage: pageSize,
    pages: pagination.pages,
    selectedPage,
    endPage: pagination.endPage,
    startPage: pagination.startPage,
    next: () => handlePageChange((pagination.currentPage += 1)),
    prev: () => handlePageChange((pagination.currentPage -= 1)),
    setPage: (newPage: number) => handlePageChange((pagination.currentPage = newPage)),
  };
}
