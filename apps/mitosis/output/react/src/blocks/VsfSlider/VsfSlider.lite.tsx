import * as React from "react";
import { useState, useRef } from "react";
import type { SlotType } from "../../functions/types";
export interface VsfSliderProps {
  children?: SlotType;
  hasChevrons: boolean;
  hasScrollbar: boolean;
}

import { classStringFromArray } from "../../functions/domUtils";
import VsfButton from "../VsfButton/VsfButton.lite";
import VsfIconChevronLeft from "../VsfIcons/VsfIconChevronLeft.lite";
import VsfIconChevronRight from "../VsfIcons/VsfIconChevronRight.lite";
const DEFAULT_VALUES: Required<VsfSliderProps> = {
  children: "",
  hasChevrons: true,
  hasScrollbar: true,
};

export default function VsfSlider(props: VsfSliderProps) {
  const sliderRef = useRef<HTMLElement>(null);
  const [prevChevronVisibility, setPrevChevronVisibility] = useState(
    () => false
  );

  const [nextChevronVisibility, setNextChevronVisibility] = useState(
    () => true
  );

  function useHasChevronsProp() {
    return props.hasChevrons ?? DEFAULT_VALUES.hasChevrons;
  }

  function useHasScrollbarProp() {
    return props.hasScrollbar ?? DEFAULT_VALUES.hasScrollbar;
  }

  function go(direct) {
    if (direct === "next") {
      sliderRef.current.scrollLeft +=
        sliderRef.current?.children[0]?.getBoundingClientRect()?.width;
    } else {
      sliderRef.current.scrollLeft -=
        sliderRef.current?.children[0]?.getBoundingClientRect()?.width;
    }
  }

  function setChevrons(e) {
    const maxScrollLeft = e.target.scrollWidth - e.target.clientWidth;
    setPrevChevronVisibility(e.target.scrollLeft !== 0);
    setNextChevronVisibility(e.target.scrollLeft !== maxScrollLeft);
  }

  return (
    <>
      <div className="grid grid-flow-col w-fit items-center gap-4">
        {useHasChevronsProp() ? (
          <>
            <VsfButton
              variant="secondary"
              classes={classStringFromArray([
                "slider-button w-12 h-12",
                !prevChevronVisibility && "invisible",
              ])}
              isRoundedFull={true}
              onClick={(event) => go("prev")}
            >
              <span className="w-6 h-6">
                <VsfIconChevronLeft className="slider-chevron" />
              </span>
            </VsfButton>
          </>
        ) : null}

        <div
          ref={sliderRef}
          onScroll={(e) => setChevrons(e)}
          className={classStringFromArray([
            "slider-items-container grid grid-flow-col overflow-x-auto overscroll-contain scroll-smooth snap-x gap-4 pb-3",
            !useHasScrollbarProp() && "no-scrollbar",
          ])}
        >
          {props.children}
        </div>

        {useHasChevronsProp() ? (
          <>
            <VsfButton
              variant="secondary"
              classes={classStringFromArray([
                "slider-button w-12-h12",
                !nextChevronVisibility && "invisible",
              ])}
              isRoundedFull={true}
              onClick={(event) => go("next")}
            >
              <span className="w-6 h-6">
                <VsfIconChevronRight className="slider-chevron" />
              </span>
            </VsfButton>
          </>
        ) : null}
      </div>
    </>
  );
}
