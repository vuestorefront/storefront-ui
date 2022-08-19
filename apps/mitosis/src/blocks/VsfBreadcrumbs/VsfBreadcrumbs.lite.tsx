import { Show, useStore, useRef, For, onUnMount, onUpdate, onMount } from '@builder.io/mitosis';

export type Breadcrumb = {
  name: string;
  link: string;
};

export interface BreadcrumbsProps {
  breadcrumbs?: Breadcrumb[];
  withIcon?: boolean;
  slotIcon?: any;
}

const DEFAULT_VALUES = {
  breadcrumbs: [],
  withIcon: false,
};

export default function VsfBreadcrumbs(props: BreadcrumbsProps) {
  // TODO focus directive

  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const state = useStore({
    get useBreadcrumbs() {
      return props.breadcrumbs || DEFAULT_VALUES.breadcrumbs;
    },
    get useWithIcon() {
      return props.withIcon || DEFAULT_VALUES.withIcon;
    },
    get showDots(): boolean {
      return state.breadcrumbsList.length !== state.useBreadcrumbs.length;
    },
    get padding() {
      return 40;
    },
    get dropdownOpenedClass(): string {
      return state.dropdownOpened ? 'flex' : 'hidden';
    },
    firstBreadcrumbItem() {
      return navRef?.children[0]?.children[1]?.clientWidth || 0;
    },
    breadcrumbsWidth() {
      return navRef?.offsetWidth || 0;
    },
    offsetLeft() {
      return navRef?.offsetLeft || 0;
    },
    get breadCrumbItemClass() {
      return "[&:nth-of-type(1n+3)]:before:content-['/'] [&:nth-of-type(1n+3)]:before:mx-2 [&:last-child>a]:font-medium [&:last-child>a]:text-gray-900 [&:last-child>a]:!no-underline";
    },
    breadcrumbsList: [] as Breadcrumb[],
    dropdownOpened: false,
    dropdownList: [] as Breadcrumb[],
    firstElementWidth: 0,
    newWindowWidth: 0,
    handleDropdownClickOutside(e: Event) {
      if (!dropdownRef?.contains(e.target as Node)) {
        state.dropdownOpened = false;
      }
    },
    handleButtonClick(e: Event) {
      e.stopPropagation();
      state.dropdownOpened = true;
    },
    onWindowResize() {
      state.newWindowWidth = window.innerWidth;
    },
  });

  onMount(() => {
    state.breadcrumbsList = state.useBreadcrumbs.slice(0);
    state.newWindowWidth = window.innerWidth;
    document.addEventListener('click', state.handleDropdownClickOutside, true);
    window.addEventListener('resize', state.onWindowResize);
  });

  onUpdate(() => {
    const breadcrumbsWidthVal = state.breadcrumbsWidth(),
      firstBreadcrumbItemVal = state.firstBreadcrumbItem(),
      offsetLeftVal = state.offsetLeft();
    if (state.newWindowWidth <= breadcrumbsWidthVal + state.padding + offsetLeftVal) {
      const removedItemFromBreadcrumbs = state.breadcrumbsList[0];

      if (removedItemFromBreadcrumbs) {
        state.breadcrumbsList = state.breadcrumbsList.slice(1);
        state.dropdownList = [removedItemFromBreadcrumbs, ...state.dropdownList];
      }
    }
    if (state.newWindowWidth - state.padding > breadcrumbsWidthVal + state.firstElementWidth + state.padding + offsetLeftVal) {
      if (state.firstElementWidth !== firstBreadcrumbItemVal) {
        state.firstElementWidth = firstBreadcrumbItemVal;
      }
      const removedItemFromDropdown = state.dropdownList[0];
      if (removedItemFromDropdown) {
        state.dropdownList = state.dropdownList.slice(1);
        state.breadcrumbsList = [removedItemFromDropdown, ...state.breadcrumbsList];
      }
    }
  }, [state.newWindowWidth]);

  onUnMount(() => {
    document.removeEventListener('click', state.handleDropdownClickOutside, true);
    window.removeEventListener('resize', state.onWindowResize);
  });

  return (
    <>
      <nav ref={navRef} class="inline-flex items-center">
        <ol class="flex w-auto text-sm font-normal leading-none text-gray-500 font-body">
          <li class="relative">
            <Show when={state.showDots}>
              <div>
                <button
                  class="flex leading-5 relative peer after:content-['/'] after:mx-2 outline-violet rounded-sm"
                  aria-label="Show previous categories"
                  onClick={(e) => state.handleButtonClick(e)}
                >
                  <svg
                    class="hover:fill-primary-600 fill-gray-500"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14C10.8965 14 10 13.1035 10 12C10 10.8965 10.8965 10 12 10C13.1035 10 14 10.8965 14 12C14 13.1035 13.1035 14 12 14ZM16 12C16 13.1035 16.8965 14 18 14C19.1035 14 20 13.1035 20 12C20 10.8965 19.1035 10 18 10C16.8965 10 16 10.8965 16 12ZM8 12C8 10.8965 7.1035 10 6 10C4.8965 10 4 10.8965 4 12C4 13.1035 4.8965 14 6 14C7.1035 14 8 13.1035 8 12Z" />
                  </svg>
                </button>
                <ul
                  ref={dropdownRef}
                  className={`bg-white rounded-md shadow-md p-[16px] absolute top-100 left-0 flex-col text-base text-gray-900 ${state.dropdownOpenedClass}`}
                >
                  <For each={state.dropdownList}>
                    {(item, index) => (
                      <li aria-label={item.name} class="py-2" key={index}>
                        <a
                          href={item.link}
                          class="leading-5 align-middle rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
                        >
                          {item.name}
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            </Show>
          </li>
          <Show when={!state.showDots && state.useWithIcon}>
            <li aria-label="Home" class={`relative breadcrumb-item ${state.breadCrumbItemClass}`}>
              <>{props.slotIcon}</>
              <Show when={!props.slotIcon}>
                <a
                  href="/"
                  class="leading-5 rounded-sm whitespace-nowrap hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-gray-500 hover:fill-primary-600 active:fill-gray-900"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.41083 1.91107C9.73626 1.58563 10.2639 1.58563 10.5893 1.91107L18.0893 9.41107C18.4148 9.73651 18.4148 10.2641 18.0893 10.5896C17.7639 10.915 17.2363 10.915 16.9108 10.5896L16.6667 10.3455V16.667C16.6667 17.5875 15.9206 18.3337 15.0001 18.3337H5.00008C4.07961 18.3337 3.33341 17.5875 3.33341 16.667V10.3455L3.08934 10.5896C2.7639 10.915 2.23626 10.915 1.91083 10.5896C1.58539 10.2641 1.58539 9.73651 1.91083 9.41107L9.41083 1.91107ZM5.00008 8.67884V16.667H7.50008V13.3337C7.50008 12.4132 8.24627 11.667 9.16675 11.667H10.8334C11.7539 11.667 12.5001 12.4132 12.5001 13.3337V16.667H15.0001V8.67884L10.0001 3.67884L5.00008 8.67884ZM10.8334 16.667V13.3337H9.16675V16.667H10.8334Z"
                    />
                  </svg>
                </a>
              </Show>
            </li>
          </Show>
          <For each={state.breadcrumbsList}>
            {(item, index) => (
              <li aria-label={item.name} class={`relative breadcrumb-item ${state.breadCrumbItemClass}`} key={index}>
                <a
                  href={item.link}
                  class="leading-5 rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
                >
                  {item.name}
                </a>
              </li>
            )}
          </For>
        </ol>
      </nav>
    </>
  );
}
