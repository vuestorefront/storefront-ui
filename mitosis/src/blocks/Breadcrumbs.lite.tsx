import { Show, useStore, useRef, useState, For } from "@builder.io/mitosis";

export type Breadcrumb = {
  name: string;
  link: string;
};

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  withIcon: boolean;
}

const DEFAULT_VALUES = {
  breadcrumbs: [],
  withIcon: false,
};

export default function Breadcrumbs(props: BreadcrumbsProps) {
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [dropdown, setDropdown] = useState(null);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const padding = 40;
  const [dropdownList, setDropdownList] = useState<Breadcrumb[]>([{ name: "", link: "" }]);
  const [firstElementWidth, setFirstElementWidth] = useState(0);

  const state = useStore({
    get breadcrumbs() {
      return props.breadcrumbs || DEFAULT_VALUES.breadcrumbs;
    },
    get withIcon() {
      return props.withIcon || DEFAULT_VALUES.withIcon;
    },
    get breadcrumbsList() {
      return [...state.breadcrumbs];
    },
    get showDots() {
      return state.breadcrumbsList.length !== state.breadcrumbs.length;
    },
    get firstBreadcrumbItem() {
      return navRef.children[0]?.children[1]?.clientWidth;
    },
    get dropdownOpenedClass() {
      return dropdownOpened ? "flex" : "hidden";
    },
  });
  // TODO focus directive
  // TODO watch WindowWidth (onUpdate)
  // TODO on-click-outside

  return (
    <>
      <nav ref={navRef} class="inline-flex items-center">
        <ol class="flex w-auto text-sm font-normal leading-none text-gray-500 font-body">
          <li class="relative">
            <Show when={state.showDots}>
              <button
                class="flex leading-5 relative peer after:content-['/'] after:mx-2 outline-violet rounded-sm"
                aria-label="Show previous categories"
                onClick={() => setDropdownOpened(true)}
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
                <For each={dropdownList}>
                  {(item) => (
                    <li aria-label={item.name} class="py-2">
                      <a
                        href={item.link}
                        class="leading-5 align-middle rounded-sm whitespace-nowrap hover:text-primary-600
                    hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
                      >
                        {item.name}
                      </a>
                    </li>
                  )}
                </For>
              </ul>
            </Show>
          </li>
        </ol>
      </nav>
    </>
  );
}
