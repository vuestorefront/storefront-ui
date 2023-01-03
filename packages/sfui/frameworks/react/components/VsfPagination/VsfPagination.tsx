import { useState, useEffect } from 'react';
import paginate from 'jw-paginate';
import classNames from 'classnames';
import { VsfButton, VsfButtonVariants } from '../VsfButton';
import { VsfIconChevronLeft, VsfIconChevronRight } from '../VsfIcons';
import type { VsfPaginationProps } from './types';
import VsfDivider from '../VsfDivider/VsfDivider';

export default function VsfPagination({
  totalItems,
  currentPage = 0,
  itemsPerPage,
  maxVisiblePages,
  handlePageUpdate,
  slotPrefix,
  slotSuffix,
  children,
  className,
  ...attributes
}: VsfPaginationProps): JSX.Element {
  const [pagination, setPagination] = useState(paginate(totalItems, currentPage, itemsPerPage, maxVisiblePages));
  const [selectedPage, setSelectedPage] = useState(currentPage);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setPagination(paginate(totalItems, selectedPage, itemsPerPage, maxVisiblePages));
  }, [totalItems, selectedPage, itemsPerPage, maxVisiblePages]);

  const onPageChange = (page: number) => {
    setSelectedPage(page);
    handlePageUpdate?.(page);
  };

  return (
    <>
      <VsfDivider />
      <nav
        className={classNames('vsf-pagination', className)}
        role="navigation"
        aria-label="pagination"
        {...attributes}
        data-testid="pagination"
      >
        {/* TODO: i18n aria-label */}
        <VsfButton
          className="vsf-pagination__button"
          aria-label="Previous"
          onClick={() => onPageChange(selectedPage - 1)}
          disabled={selectedPage <= 1}
          variant={VsfButtonVariants.tertiary}
          data-testid="pagination-button-prev"
        >
          <VsfIconChevronLeft />
          <span className="vsf-pagination__button--text">Previous</span>
        </VsfButton>
        <ul className="vsf-pagination__items">
          {!pagination.pages.find((page) => page === 1) && (
            <li>
              {slotPrefix || (
                <div
                  className={classNames('vsf-pagination__item', {
                    'vsf-pagination__item--selected': selectedPage === 1,
                  })}
                >
                  {/* TODO: i18n aria-label */}
                  <VsfButton
                    className="vsf-pagination__button"
                    aria-label={`Page 1 of ${pagination.totalPages}`}
                    aria-current={selectedPage === 1}
                    onClick={() => onPageChange(1)}
                    variant={VsfButtonVariants.tertiary}
                    data-testid="pagination-button-first"
                  >
                    1
                  </VsfButton>
                </div>
              )}
            </li>
          )}
          {pagination.startPage >= 2 && (
            <li>
              <div className="vsf-pagination__item">
                <VsfButton
                  disabled
                  aria-hidden="true"
                  variant={VsfButtonVariants.tertiary}
                  className="vsf-pagination__button vsf-pagination__button--disabled"
                  data-testid="pagination-button-ellipsis-left"
                >
                  ...
                </VsfButton>
              </div>
            </li>
          )}
          {children ||
            pagination.pages.map((page) => (
              <li key={`page-${page}`}>
                <div
                  className={classNames(
                    'vsf-pagination__item',
                    selectedPage === page && 'vsf-pagination__item--selected',
                  )}
                >
                  {/* TODO: i18n aria-label */}
                  <VsfButton
                    className="vsf-pagination__button"
                    aria-label={`Page ${page} of ${pagination.totalPages}`}
                    aria-current={selectedPage === page}
                    variant={VsfButtonVariants.tertiary}
                    onClick={() => onPageChange(page)}
                    data-testid={`pagination-button-visible-${page}`}
                  >
                    {page}
                  </VsfButton>
                </div>
              </li>
            ))}
          {pagination.endPage <= pagination.totalPages - 1 && (
            <li>
              <div className="vsf-pagination__item">
                <VsfButton
                  disabled
                  aria-hidden="true"
                  variant={VsfButtonVariants.tertiary}
                  className="vsf-pagination__button vsf-pagination__button--disabled"
                  data-testid="pagination-button-ellipsis-right"
                >
                  ...
                </VsfButton>
              </div>
            </li>
          )}
          {!pagination.pages.find((p) => p === pagination.totalPages) && (
            <li>
              {slotSuffix || (
                <div
                  className={classNames(
                    'vsf-pagination__item',
                    selectedPage === pagination.totalPages && 'vsf-pagination__item--selected',
                  )}
                >
                  {/* TODO: i18n aria-label */}
                  <VsfButton
                    className="vsf-pagination__button"
                    aria-label={`Page ${pagination.totalPages} of ${pagination.totalPages}`}
                    aria-current={pagination.totalPages === selectedPage}
                    onClick={() => onPageChange(pagination.totalPages)}
                    variant={VsfButtonVariants.tertiary}
                    data-testid="pagination-button-last"
                  >
                    {pagination.totalPages}
                  </VsfButton>
                </div>
              )}
            </li>
          )}
        </ul>
        {/* TODO: i18n aria-label */}
        <VsfButton
          className="vsf-pagination__button"
          aria-label="Next"
          disabled={selectedPage >= pagination.totalPages}
          onClick={() => onPageChange(selectedPage + 1)}
          variant={VsfButtonVariants.tertiary}
          data-testid="pagination-button-next"
        >
          <span className="vsf-pagination__button--text">Next</span>
          <VsfIconChevronRight />
        </VsfButton>
      </nav>
    </>
  );
}
