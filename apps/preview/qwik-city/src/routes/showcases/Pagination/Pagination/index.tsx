import { component$, useSignal } from '@builder.io/qwik';
import { SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/qwik';

export default component$(() => {
  const startPageSignal = useSignal(0);
  const selectedPageSignal = useSignal(0);
  const pages = [1, 2, 3];
  const totalPages = 3;
  const maxVisiblePages = 1;
  const endPage = 2;

  // TODO hook and logic are missing 
  // const { totalPages, pages, selectedPage, startPage, endPage, next, prev, setPage, maxVisiblePages } = usePagination({
  //   totalItems: 150,
  //   currentPage: 2,
  //   pageSize: 10,
  //   maxPages: 1,
  // });

  return (
    <nav
      class="flex justify-between items-center border-t border-neutral-200"
      role="navigation"
      aria-label="pagination"
    >
      <SfButton
        type="button"
        size="lg"
        class="gap-3"
        aria-label="Go to previous page"
        disabled={selectedPageSignal.value <= 1}
        variant="tertiary"
        onClick$={() => {
          // prev();
        }}
      >
        <div q:slot="prefix">
          <SfIconChevronLeft />
        </div>
        <span class="hidden sm:inline-flex">Previous</span>
      </SfButton>
      <ul class="flex justify-center">
        {!pages.find((page: number) => page === 1) && (
          <li>
            <div
              class={`flex pt-1 border-t-4 border-transparent ${
                selectedPageSignal.value === 1 ? 'font-medium border-t-4 !border-primary-700' : ''
              }`}
            >
              <button
                type="button"
                class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
                aria-current={selectedPageSignal.value === 1}
                onClick$={() => {
                  selectedPageSignal.value = 1;
                }}
              >
                1
              </button>
            </div>
          </li>
        )}
        {startPageSignal.value > 2 && (
          <li>
            <div class="flex border-t-4 border-transparent">
              <button
                type="button"
                disabled
                aria-hidden="true"
                class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
              >
                ...
              </button>
            </div>
          </li>
        )}
        {pages.map((page: number) => (
          <span key={page}>
            {maxVisiblePages === 1 && selectedPageSignal.value === totalPages && (
              <li>
                <div class="flex pt-1 border-t-4 border-transparent">
                  <button
                    type="button"
                    class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
                    aria-current={endPage - 1 === selectedPageSignal.value}
                    onClick$={() => {
                      // setPage(endPage - 1);
                    }}
                  >
                    {endPage - 1}
                  </button>
                </div>
              </li>
            )}
            <li>
              <div
                class={`flex pt-1 border-t-4 border-transparent ${
                  selectedPageSignal.value === page ? 'font-medium border-t-4 !border-primary-700' : ''
                }`}
              >
                <button
                  type="button"
                  class={`px-4 py-3 text-neutral-500 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900
                    ${
                      selectedPageSignal.value === page
                        ? '!text-neutral-900 hover:!text-primary-800 active:!text-primary-900'
                        : ''
                    }`}
                  aria-label={`Page ${page} of ${totalPages}`}
                  aria-current={selectedPageSignal.value === page}
                  onClick$={() => {
                    // setPage(page);
                  }}
                >
                  {page}
                </button>
              </div>
            </li>
            {maxVisiblePages === 1 && selectedPageSignal.value === 1 && (
              <li>
                <div class="flex pt-1 border-t-4 border-transparent">
                  <button
                    type="button"
                    class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
                    aria-current={selectedPageSignal.value === 1}
                    onClick$={() => {
                      // setPage(2);
                    }}
                  >
                    2
                  </button>
                </div>
              </li>
            )}
          </span>
        ))}
        {endPage < totalPages - 1 && (
          <li>
            <div class="flex pt-1 border-t-4 border-transparent">
              <button type="button" disabled aria-hidden="true" class="px-4 py-3 rounded-md text-neutral-500 ">
                ...
              </button>
            </div>
          </li>
        )}
        {!pages.find((page: number) => page === totalPages) && (
          <li>
            <div
              class={`flex pt-1 border-t-4 border-transparent ${
                selectedPageSignal.value === totalPages ? 'font-medium border-t-4 !border-primary-700' : ''
              }`}
            >
              <button
                type="button"
                class="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
                aria-current={totalPages === selectedPageSignal.value}
                onClick$={() => {
                  // setPage(totalPages);
                }}
              >
                {totalPages}
              </button>
            </div>
          </li>
        )}
      </ul>
      <SfButton
        type="button"
        size="lg"
        aria-label="Go to next page"
        disabled={selectedPageSignal.value >= totalPages}
        variant="tertiary"
        class="gap-3"
        onClick$={() => {
          // next();
        }}
      >
        <div q:slot="suffix">
          <SfIconChevronRight />
        </div>
        <span class="hidden sm:inline-flex">Next</span>
      </SfButton>
    </nav>
  );
});
