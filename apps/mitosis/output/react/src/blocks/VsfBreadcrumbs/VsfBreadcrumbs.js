import * as React from "react";
import { useState, useRef, useEffect } from "react";
import VsfIconHome from "../VsfIcons/VsfIconHome.js";
import VsfIconMoreHorizontal from "../VsfIcons/VsfIconMoreHorizontal.js";
const DEFAULT_VALUES = {
  breadcrumbs: [],
  withIcon: false
};
function VsfBreadcrumbs(props) {
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
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
    return 40;
  }
  function firstBreadcrumbItem() {
    var _a, _b, _c;
    return ((_c = (_b = (_a = navRef.current) == null ? void 0 : _a.children[0]) == null ? void 0 : _b.children[1]) == null ? void 0 : _c.clientWidth) || 0;
  }
  function breadcrumbsWidth() {
    var _a;
    return ((_a = navRef.current) == null ? void 0 : _a.offsetWidth) || 0;
  }
  function offsetLeft() {
    var _a;
    return ((_a = navRef.current) == null ? void 0 : _a.offsetLeft) || 0;
  }
  const [breadcrumbsList, setBreadcrumbsList] = useState(() => []);
  const [dropdownOpened, setDropdownOpened] = useState(() => false);
  const [dropdownList, setDropdownList] = useState(() => []);
  const [firstElementWidth, setFirstElementWidth] = useState(() => 0);
  const [newWindowWidth, setNewWindowWidth] = useState(() => 0);
  function handleDropdownClickOutside(e) {
    var _a;
    if (!((_a = dropdownRef.current) == null ? void 0 : _a.contains(e.target))) {
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
    const breadcrumbsWidthVal = breadcrumbsWidth(), firstBreadcrumbItemVal = firstBreadcrumbItem(), offsetLeftVal = offsetLeft();
    if (newWindowWidth <= breadcrumbsWidthVal + padding() + offsetLeftVal) {
      const removedItemFromBreadcrumbs = breadcrumbsList[0];
      if (removedItemFromBreadcrumbs) {
        setBreadcrumbsList(breadcrumbsList.slice(1));
        setDropdownList([removedItemFromBreadcrumbs, ...dropdownList]);
      }
    }
    if (newWindowWidth - padding() > breadcrumbsWidthVal + firstElementWidth + padding() + offsetLeftVal) {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "inline-flex items-center",
    ref: navRef
  }, /* @__PURE__ */ React.createElement("ol", {
    className: "flex w-auto text-sm font-normal leading-none text-gray-500 font-body"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "relative"
  }, showDots() ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "flex leading-5 relative peer after:content-['/'] after:mx-2 outline-violet rounded-sm",
    "aria-label": "Show previous categories",
    onClick: (e) => handleButtonClick(e)
  }, /* @__PURE__ */ React.createElement(VsfIconMoreHorizontal, {
    size: "sm",
    className: "hover:text-primary-600 text-gray-500"
  })), dropdownOpened ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
    ref: dropdownRef,
    className: `bg-white rounded-md shadow-md p-[16px] absolute top-100 left-0 flex-col text-base text-gray-900 z-10`
  }, dropdownList == null ? void 0 : dropdownList.map((item, index) => /* @__PURE__ */ React.createElement("li", {
    className: "py-2",
    "aria-label": item.name,
    key: index
  }, /* @__PURE__ */ React.createElement("a", {
    className: "leading-5 align-middle rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet",
    href: item.link
  }, item.name))))) : null)) : null), !showDots() && useWithIconProp() ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    "aria-label": "Home",
    className: "relative breadcrumb-item"
  }, props.slotIcon, !props.slotIcon ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "leading-5 rounded-sm whitespace-nowrap hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet"
  }, /* @__PURE__ */ React.createElement(VsfIconHome, {
    className: "fill-gray-500 hover:text-primary-600 active:text-gray-900"
  }))) : null)) : null, breadcrumbsList == null ? void 0 : breadcrumbsList.map((item, index) => /* @__PURE__ */ React.createElement("li", {
    className: "relative breadcrumb-item",
    "aria-label": item.name,
    key: index
  }, /* @__PURE__ */ React.createElement("a", {
    className: "leading-5 rounded-sm whitespace-nowrap hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline outline-violet",
    href: item.link
  }, item.name))))));
}
export {
  VsfBreadcrumbs as default
};
