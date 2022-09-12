import * as React from "react";
import { useState, useRef } from "react";
import { classStringFromArray } from "../../functions/domUtils";
import VsfButton from "../VsfButton/VsfButton.js";
import VsfIconChevronLeft from "../VsfIcons/VsfIconChevronLeft.js";
import VsfIconChevronRight from "../VsfIcons/VsfIconChevronRight.js";
const DEFAULT_VALUES = {
  children: "",
  hasChevrons: true,
  hasScrollbar: true
};
function VsfSlider(props) {
  const sliderRef = useRef(null);
  const [prevChevronVisibility, setPrevChevronVisibility] = useState(() => false);
  const [nextChevronVisibility, setNextChevronVisibility] = useState(() => true);
  function useHasChevronsProp() {
    var _a;
    return (_a = props.hasChevrons) != null ? _a : DEFAULT_VALUES.hasChevrons;
  }
  function useHasScrollbarProp() {
    var _a;
    return (_a = props.hasScrollbar) != null ? _a : DEFAULT_VALUES.hasScrollbar;
  }
  function go(direct) {
    var _a, _b, _c, _d, _e, _f;
    if (direct === "next") {
      sliderRef.current.scrollLeft += (_c = (_b = (_a = sliderRef.current) == null ? void 0 : _a.children[0]) == null ? void 0 : _b.getBoundingClientRect()) == null ? void 0 : _c.width;
    } else {
      sliderRef.current.scrollLeft -= (_f = (_e = (_d = sliderRef.current) == null ? void 0 : _d.children[0]) == null ? void 0 : _e.getBoundingClientRect()) == null ? void 0 : _f.width;
    }
  }
  function setChevrons(e) {
    const maxScrollLeft = e.target.scrollWidth - e.target.clientWidth;
    setPrevChevronVisibility(e.target.scrollLeft !== 0);
    setNextChevronVisibility(e.target.scrollLeft !== maxScrollLeft);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-flow-col w-fit items-center gap-4"
  }, useHasChevronsProp() ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfButton, {
    variant: "secondary",
    classes: classStringFromArray([
      "slider-button w-12 h-12",
      !prevChevronVisibility && "invisible"
    ]),
    isRoundedFull: true,
    onClick: (event) => go("prev")
  }, /* @__PURE__ */ React.createElement("span", {
    className: "w-6 h-6"
  }, /* @__PURE__ */ React.createElement(VsfIconChevronLeft, {
    className: "slider-chevron"
  })))) : null, /* @__PURE__ */ React.createElement("div", {
    ref: sliderRef,
    onScroll: (e) => setChevrons(e),
    className: classStringFromArray([
      "slider-items-container grid grid-flow-col overflow-x-auto overscroll-contain scroll-smooth snap-x gap-4 pb-3",
      !useHasScrollbarProp() && "no-scrollbar"
    ])
  }, props.children), useHasChevronsProp() ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfButton, {
    variant: "secondary",
    classes: classStringFromArray([
      "slider-button w-12-h12",
      !nextChevronVisibility && "invisible"
    ]),
    isRoundedFull: true,
    onClick: (event) => go("next")
  }, /* @__PURE__ */ React.createElement("span", {
    className: "w-6 h-6"
  }, /* @__PURE__ */ React.createElement(VsfIconChevronRight, {
    className: "slider-chevron"
  })))) : null));
}
export {
  VsfSlider as default
};
