import { useStore, useRef, Show } from "@builder.io/mitosis";
import { classStringFromArray } from "../../functions/domUtils";
import VsfButton from "../VsfButton/VsfButton.lite";
import VsfIconChevronLeft from "../VsfIcons/VsfIconChevronLeft.lite";
import VsfIconChevronRight from "../VsfIcons/VsfIconChevronRight.lite";
import type { SlotType } from "../../functions/types";


export interface VsfSliderProps {
  children?: SlotType;
  hasChevrons: boolean;
  hasScrollbar: boolean;
}

const DEFAULT_VALUES: Required<VsfSliderProps> = {
  children: '',
  hasChevrons: true,
  hasScrollbar: true,
}

export default function VsfSlider(props: VsfSliderProps) {
  const sliderRef = useRef<HTMLElement>(null);
  const state = useStore({
    prevChevronVisibility: true,
    nextChevronVisibility: true,
    get useHasChevronsProp() {
      return props.hasChevrons ?? DEFAULT_VALUES.hasChevrons
    },
    get useHasScrollbarProp() {
      return props.hasScrollbar ?? DEFAULT_VALUES.hasScrollbar
    },
    go(direct: string) {
      if (direct === 'next') {
        sliderRef.scrollLeft += sliderRef?.children[0]?.getBoundingClientRect()?.width + 16
      } else {
        sliderRef.scrollLeft -= sliderRef?.children[0]?.getBoundingClientRect()?.width + 16
      }
    },
    setChevrons(e: UIEvent<HTMLElement>) {
      const maxScrollLeft = e.target.scrollWidth - e.target.clientWidth;
      
      state.prevChevronVisibility = e.target.scrollLeft !== 0;
      state.nextChevronVisibility = e.target.scrollLeft !== maxScrollLeft;
    },
  });

  return (
    <>
      <div className="grid grid-flow-col w-fit items-center gap-4">
        <Show when={state.useHasChevronsProp}>
          <VsfButton
            classes={classStringFromArray([
              'w-12 h-12 rounded-full',
              !state.prevChevronVisibility && 'invisible',
            ])}
            variant={"secondary"}
            onClick={() => state.go('prev')}
          >
            <VsfIconChevronLeft />
          </VsfButton>
        </Show>
        <div
          ref={sliderRef}
          className={classStringFromArray([
            'slider-items-container grid grid-flow-col overflow-x-auto overscroll-contain scroll-smooth snap-x gap-4',
            !state.useHasScrollbarProp && 'no-scrollbar',
          ])}
          onScroll={(e) => state.setChevrons(e)}
        >
          {props.children}
        </div>
        <Show when={state.useHasChevronsProp}>
          <VsfButton
            classes={classStringFromArray([
              'w-12 h-12 rounded-full',
              !state.nextChevronVisibility && 'invisible',
            ])}
            variant={"secondary"}
            onClick={() => state.go('next')}
          >
            <VsfIconChevronRight />
          </VsfButton>
        </Show>
      </div>
    </>
  )
}
