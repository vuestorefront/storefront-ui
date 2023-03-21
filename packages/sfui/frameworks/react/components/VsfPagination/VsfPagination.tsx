import { useState, useEffect, Fragment } from 'react';
import paginate from 'jw-paginate';
import classNames from 'classnames';
import { VsfButton, VsfButtonVariant } from '../VsfButton';
import { VsfIconChevronLeft, VsfIconChevronRight } from '../VsfIcons';
import type { VsfPaginationProps } from './types';
import VsfDivider from '../VsfDivider/VsfDivider';

export default function VsfPagination({
  totalItems = 0,
  currentPage = 0,
  itemsPerPage = 0,
  maxVisiblePages,
  onPageUpdate,
  slotPrefix,
  slotSuffix,
  prev,
  next,
  slotPrev,
  slotNext,
  children,
  className,
  ariaLabelButton = (page: number, totalPages: number) => `Page ${page} of ${totalPages}`,
  hideButtonLabels = false,
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
    onPageUpdate?.(page);
  };

  return (
    <>
      <VsfDivider />
      <nav
        className={classNames('vsf-pagination', className)}
        role="navigation"
        aria-label="pagination"
        data-testid="pagination"
        {...attributes}
      >
        {slotPrev || (
          <VsfButton
            className="vsf-pagination__button"
            aria-label={prev}
            onClick={() => onPageChange(selectedPage - 1)}
            disabled={selectedPage <= 1}
            variant={VsfButtonVariant.tertiary}
            data-testid="pagination-button-prev"
          >
            <VsfIconChevronLeft />
            {!hideButtonLabels && (
              <span className="vsf-pagination__button--text" data-testid="pagination-label-prev">
                {prev}
              </span>
            )}
          </VsfButton>
        )}
        <ul className="vsf-pagination__items">
          {!pagination.pages.find((page) => page === 1) && (
            <li>
              {slotPrefix || (
                <div
                  className={classNames('vsf-pagination__item', {
                    'vsf-pagination__item--selected': selectedPage === 1,
                  })}
                >
                  <VsfButton
                    className="vsf-pagination__button"
                    aria-label={ariaLabelButton(1, pagination.totalPages)}
                    aria-current={selectedPage === 1}
                    onClick={() => onPageChange(1)}
                    variant={VsfButtonVariant.tertiary}
                    data-testid="pagination-button-first"
                  >
                    1
                  </VsfButton>
                </div>
              )}
            </li>
          )}
          {pagination.startPage > 2 && (
            <li>
              <div className="vsf-pagination__item">
                <VsfButton
                  disabled
                  aria-hidden="true"
                  variant={VsfButtonVariant.tertiary}
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
              <Fragment key={page}>
                {maxVisiblePages === 1 && selectedPage === pagination.totalPages && (
                  <li>
                    <div className={classNames('vsf-pagination__item')}>
                      <VsfButton
                        className="vsf-pagination__button"
                        aria-label={ariaLabelButton(pagination.endPage - 1, pagination.totalPages)}
                        aria-current={selectedPage}
                        onClick={() => onPageChange(pagination.endPage - 1)}
                        variant={VsfButtonVariant.tertiary}
                        data-testid="pagination-button-first"
                      >
                        {pagination.endPage - 1}
                      </VsfButton>
                    </div>
                  </li>
                )}
                <li key={`page-${page}`}>
                  <div
                    className={classNames(
                      'vsf-pagination__item',
                      selectedPage === page && 'vsf-pagination__item--selected',
                    )}
                  >
                    <VsfButton
                      className="vsf-pagination__button"
                      aria-label={ariaLabelButton(page, pagination.totalPages)}
                      aria-current={selectedPage === page}
                      variant={VsfButtonVariant.tertiary}
                      onClick={() => onPageChange(page)}
                      data-testid={`pagination-button-visible-${page}`}
                    >
                      {page}
                    </VsfButton>
                  </div>
                </li>
                {maxVisiblePages === 1 && selectedPage === 1 && (
                  <li>
                    <div className={classNames('vsf-pagination__item')}>
                      <VsfButton
                        className="vsf-pagination__button"
                        aria-label={ariaLabelButton(2, pagination.totalPages)}
                        aria-current={selectedPage}
                        onClick={() => onPageChange(2)}
                        variant={VsfButtonVariant.tertiary}
                        data-testid="pagination-button-first"
                      >
                        2
                      </VsfButton>
                    </div>
                  </li>
                )}
              </Fragment>
            ))}
          {pagination.endPage < pagination.totalPages - 1 && (
            <li>
              <div className="vsf-pagination__item">
                <VsfButton
                  disabled
                  aria-hidden="true"
                  variant={VsfButtonVariant.tertiary}
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
                  <VsfButton
                    className="vsf-pagination__button"
                    aria-label={ariaLabelButton(pagination.totalPages, pagination.totalPages)}
                    aria-current={pagination.totalPages === selectedPage}
                    onClick={() => onPageChange(pagination.totalPages)}
                    variant={VsfButtonVariant.tertiary}
                    data-testid="pagination-button-last"
                  >
                    {pagination.totalPages}
                  </VsfButton>
                </div>
              )}
            </li>
          )}
        </ul>
        {slotNext || (
          <VsfButton
            className="vsf-pagination__button"
            aria-label={next}
            disabled={selectedPage >= pagination.totalPages}
            onClick={() => onPageChange(selectedPage + 1)}
            variant={VsfButtonVariant.tertiary}
            data-testid="pagination-button-next"
          >
            {!hideButtonLabels && (
              <span className="vsf-pagination__button--text" data-testid="pagination-label-next">
                {next}
              </span>
            )}
            <VsfIconChevronRight />
          </VsfButton>
        )}
      </nav>
    </>
  );
}
