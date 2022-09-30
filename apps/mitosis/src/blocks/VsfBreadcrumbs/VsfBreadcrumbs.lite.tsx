import { Show, useStore, useRef, For, onUnMount, onUpdate, onMount } from '@builder.io/mitosis';
import VsfIconHome from '../VsfIcons/VsfIconHome.lite';
import VsfIconMoreHorizontal from '../VsfIcons/VsfIconMoreHorizontal.lite';

export type VsfBreadcrumbType = {
  name: string;
  link: string;
};

export interface VsfBreadcrumbsProps {
  breadcrumbs?: VsfBreadcrumbType[];
  withIcon?: boolean;
  slotIcon?: any;
}

const DEFAULT_VALUES = {
  breadcrumbs: [],
  withIcon: false,
};

export default function VsfBreadcrumbs(props: VsfBreadcrumbsProps) {
  // TODO focus directive

  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const state = useStore({
    get useBreadcrumbsProp() {
      return props.breadcrumbs || DEFAULT_VALUES.breadcrumbs;
    },
    get useWithIconProp() {
      return props.withIcon || DEFAULT_VALUES.withIcon;
    },
    get showDots(): boolean {
      return state.breadcrumbsList.length !== state.useBreadcrumbsProp.length;
    },
    get padding() {
      //TODO: use css-variable when tokens migrated
      return 40;
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
    breadcrumbsList: [] as VsfBreadcrumbType[],
    dropdownOpened: false,
    dropdownList: [] as VsfBreadcrumbType[],
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
    // TODO ssr support
    state.breadcrumbsList = state.useBreadcrumbsProp.slice(0);
    state.newWindowWidth = window.innerWidth;
    document.addEventListener('click', state.handleDropdownClickOutside, true);
    window.addEventListener('resize', state.onWindowResize);
  });
  onUpdate(() => {
    state.breadcrumbsList = state.useBreadcrumbsProp.slice(0);
    state.newWindowWidth = window.innerWidth;
  }, [props.breadcrumbs]);

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
    if (
      state.newWindowWidth - state.padding >
      breadcrumbsWidthVal + state.firstElementWidth + state.padding + offsetLeftVal
    ) {
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
                  <VsfIconMoreHorizontal size='sm' class="hover:text-primary-600 text-gray-500" />
                </button>
                <Show when={state.dropdownOpened}>
                  <ul
                    ref={dropdownRef}
                    className={`bg-white rounded-md shadow-md p-[16px] absolute top-100 left-0 flex-col text-base text-gray-900 z-10`}
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
                </Show>
              </div>
            </Show>
          </li>
          <Show when={!state.showDots && state.useWithIconProp}>
            <li aria-label="Home" class="relative breadcrumb-item">
              <>{props.slotIcon}</>
              <Show when={!props.slotIcon}>
                <a
                  href="/"
                  class="leading-5 rounded-sm whitespace-nowrap hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
                >
                  <VsfIconHome class="fill-gray-500 hover:text-primary-600 active:text-gray-900" />
                </a>
              </Show>
            </li>
          </Show>
          <For each={state.breadcrumbsList}>
            {(item, index) => (
              <li aria-label={item.name} class="relative breadcrumb-item" key={index}>
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
