import * as React from "react";
import { useState, useRef, useEffect } from "react";

export type VsfBreadcrumbType = {
  name: string;
  link: string;
};
export interface VsfBreadcrumbsProps {
  breadcrumbs?: VsfBreadcrumbType[];
  withIcon?: boolean;
  slotIcon?: any;
}

import VsfIconHome from "../VsfIcons/VsfIconHome";
import VsfIconMoreHorizontal from "../VsfIcons/VsfIconMoreHorizontal";
const DEFAULT_VALUES = {
  breadcrumbs: [],
  withIcon: false,
};

export default function VsfBreadcrumbs(props: VsfBreadcrumbsProps) {
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  function useBreadcrumbsProp() {
    return props.breadcrumbs || DEFAULT_VALUES.breadcrumbs;
  }

  function useWithIconProp() {
    return props.withIcon || DEFAULT_VALUES.withIcon;
  }

  function showDots() {
    return breadcrumbsList.length !== useBreadcrumbsProp().length;
  }

  function padding() {
    //TODO: use css-variable when tokens migrated
    return 40;
  }

  function firstBreadcrumbItem() {
    return navRef.current?.children[0]?.children[1]?.clientWidth || 0;
  }

  function breadcrumbsWidth() {
    return navRef.current?.offsetWidth || 0;
  }

  function offsetLeft() {
    return navRef.current?.offsetLeft || 0;
  }

  const [breadcrumbsList, setBreadcrumbsList] = useState(() => []);

  const [dropdownOpened, setDropdownOpened] = useState(() => false);

  const [dropdownList, setDropdownList] = useState(() => []);

  const [firstElementWidth, setFirstElementWidth] = useState(() => 0);

  const [newWindowWidth, setNewWindowWidth] = useState(() => 0);

  function handleDropdownClickOutside(e) {
    if (!dropdownRef.current?.contains(e.target)) {
      setDropdownOpened(false);
    }
  }

  function handleButtonClick(e) {
    e.stopPropagation();
    setDropdownOpened(true);
  }

  function onWindowResize() {
    setNewWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    // TODO ssr support
    setBreadcrumbsList(useBreadcrumbsProp().slice(0));
    setNewWindowWidth(window.innerWidth);
    document.addEventListener("click", handleDropdownClickOutside, true);
    window.addEventListener("resize", onWindowResize);
  }, []);

  useEffect(() => {
    setBreadcrumbsList(useBreadcrumbsProp().slice(0));
    setNewWindowWidth(window.innerWidth);
  }, [props.breadcrumbs]);
  useEffect(() => {
    const breadcrumbsWidthVal = breadcrumbsWidth(),
      firstBreadcrumbItemVal = firstBreadcrumbItem(),
      offsetLeftVal = offsetLeft();

    if (newWindowWidth <= breadcrumbsWidthVal + padding() + offsetLeftVal) {
      const removedItemFromBreadcrumbs = breadcrumbsList[0];

      if (removedItemFromBreadcrumbs) {
        setBreadcrumbsList(breadcrumbsList.slice(1));
        setDropdownList([removedItemFromBreadcrumbs, ...dropdownList]);
      }
    }

    if (
      newWindowWidth - padding() >
      breadcrumbsWidthVal + firstElementWidth + padding() + offsetLeftVal
    ) {
      if (firstElementWidth !== firstBreadcrumbItemVal) {
        setFirstElementWidth(firstBreadcrumbItemVal);
      }

      const removedItemFromDropdown = dropdownList[0];

      if (removedItemFromDropdown) {
        setDropdownList(dropdownList.slice(1));
        setBreadcrumbsList([removedItemFromDropdown, ...breadcrumbsList]);
      }
    }
  }, [newWindowWidth]);

  useEffect(() => {
    return () => {
      document.removeEventListener("click", handleDropdownClickOutside, true);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <>
      <nav className="inline-flex items-center" ref={navRef}>
        <ol className="flex w-auto text-sm font-normal leading-none text-gray-500 font-body">
          <li className="relative">
            {showDots() ? (
              <>
                <div>
                  <button
                    className="flex leading-5 relative peer after:content-['/'] after:mx-2 outline-violet rounded-sm"
                    aria-label="Show previous categories"
                    onClick={(e) => handleButtonClick(e)}
                  >
                    <VsfIconMoreHorizontal
                      size="sm"
                      className="hover:text-primary-600 text-gray-500"
                    />
                  </button>

                  {dropdownOpened ? (
                    <>
                      <ul
                        ref={dropdownRef}
                        className={`bg-white rounded-md shadow-md p-[16px] absolute top-100 left-0 flex-col text-base text-gray-900 z-10`}
                      >
                        {dropdownList?.map((item, index) => (
                          <li
                            className="py-2"
                            aria-label={item.name}
                            key={index}
                          >
                            <a
                              className="leading-5 align-middle rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
                              href={item.link}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
              </>
            ) : null}
          </li>

          {!showDots() && useWithIconProp() ? (
            <>
              <li aria-label="Home" className="relative breadcrumb-item">
                {props.slotIcon}

                {!props.slotIcon ? (
                  <>
                    <a
                      href="/"
                      className="leading-5 rounded-sm whitespace-nowrap hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
                    >
                      <VsfIconHome className="fill-gray-500 hover:text-primary-600 active:text-gray-900" />
                    </a>
                  </>
                ) : null}
              </li>
            </>
          ) : null}

          {breadcrumbsList?.map((item, index) => (
            <li
              className="relative breadcrumb-item"
              aria-label={item.name}
              key={index}
            >
              <a
                className="leading-5 rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
