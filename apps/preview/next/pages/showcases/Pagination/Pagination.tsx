import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton, SfIconChevronLeft, SfIconChevronRight, usePagination } from '@storefront-ui/react';
import classNames from 'classnames';

export function Showcase() {
  const { totalPages, pages, selectedPage, startPage, endPage, next, prev, onPageChange, maxVisiblePages } =
    usePagination({
      totalItems: 150,
      currentPage: 2,
      pageSize: 10,
      maxPages: 1,
    });

  return (
    <nav className="flex justify-between border-t border-neutral-200" role="navigation" aria-label="pagination">
      <SfButton
        type="button"
        className="gap-3"
        aria-label="Go to previous page"
        disabled={selectedPage <= 1}
        variant="tertiary"
        slotPrefix={<SfIconChevronLeft />}
        onClick={() => prev()}
      >
        <span className="hidden sm:inline-flex">Previous</span>
      </SfButton>
      <ul className="flex justify-center">
        {!pages.find((page: number) => page === 1) && (
          <li>
            <div
              className={classNames('flex pt-1 border-t-4 border-transparent', {
                'font-medium border-t-4 !border-primary-500': selectedPage === 1,
              })}
            >
              <button
                type="button"
                className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
                aria-current={selectedPage === 1}
                onClick={() => onPageChange(1)}
              >
                1
              </button>
            </div>
          </li>
        )}
        {startPage > 2 && (
          <li>
            <div className="flex border-t-4 border-transparent">
              <button
                type="button"
                disabled
                aria-hidden="true"
                className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
              >
                ...
              </button>
            </div>
          </li>
        )}
        {pages.map((page: number) => (
          <>
            {maxVisiblePages === 1 && selectedPage === totalPages && (
              <li>
                <div className="flex pt-1 border-t-4 border-transparent">
                  <button
                    type="button"
                    className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
                    aria-current={endPage - 1 === selectedPage}
                    onClick={() => onPageChange(endPage - 1)}
                  >
                    {endPage - 1}
                  </button>
                </div>
              </li>
            )}
            <li key={`page-${page}`}>
              <div
                className={classNames('flex pt-1 border-t-4 border-transparent', {
                  'font-medium border-t-4 !border-primary-500': selectedPage === page,
                })}
              >
                <button
                  type="button"
                  className={classNames(
                    'px-4 py-3 text-neutral-500 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900',
                    { '!text-neutral-900 hover:!text-primary-800 active:!text-primary-900': selectedPage === page },
                  )}
                  aria-label={`Page ${page} of ${totalPages}`}
                  aria-current={selectedPage === page}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </div>
            </li>
            {maxVisiblePages === 1 && selectedPage === 1 && (
              <li>
                <div className="flex pt-1 border-t-4 border-transparent">
                  <button
                    type="button"
                    className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
                    aria-current={selectedPage === 1}
                    onClick={() => onPageChange(2)}
                  >
                    2
                  </button>
                </div>
              </li>
            )}
          </>
        ))}
        {endPage < totalPages - 1 && (
          <li>
            <div className="flex pt-1 border-t-4 border-transparent">
              <button type="button" disabled aria-hidden="true" className="px-4 py-3 rounded-md text-neutral-500 ">
                ...
              </button>
            </div>
          </li>
        )}
        {!pages.find((page: number) => page === totalPages) && (
          <li>
            <div
              className={classNames('flex pt-1 border-t-4 border-transparent', {
                'font-medium border-t-4 !border-primary-500': selectedPage === totalPages,
              })}
            >
              <button
                type="button"
                className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
                aria-current={totalPages === selectedPage}
                onClick={() => onPageChange(totalPages)}
              >
                {totalPages}
              </button>
            </div>
          </li>
        )}
      </ul>
      <SfButton
        type="button"
        aria-label="Go to next page"
        disabled={selectedPage >= totalPages}
        variant="tertiary"
        slotSuffix={<SfIconChevronRight />}
        className="gap-3"
        onClick={() => next()}
      >
        <span className="hidden sm:inline-flex">Next</span>
      </SfButton>
    </nav>
  );
}

// #endregion source

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
