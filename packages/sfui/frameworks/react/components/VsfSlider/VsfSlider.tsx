import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import { isReduceMotionEnabled } from '@storefront-ui/shared';
import VsfButton from '../VsfButton/VsfButton';
import { VsfIconChevronLeft, VsfIconChevronDown, VsfIconChevronRight, VsfIconChevronUp } from '../VsfIcons';
import type { VsfSliderProps } from './types';
import { VsfSliderNavigation, VsfSliderScrollbar, VsfSliderDirection } from './types';
import { useSlider } from './slider';
import { VsfButtonVariant, VsfButtonSize } from '../VsfButton';

const VsfSlider = forwardRef<HTMLDivElement, VsfSliderProps>(
  (
    {
      navigation = VsfSliderNavigation.block,
      scrollbar = VsfSliderScrollbar.hidden,
      direction = VsfSliderDirection.horizontal,
      scrollSnap,
      draggable,
      className,
      children,
      slotNextButton,
      slotPrevButton,
      ariaLabelPrev = 'Previous',
      ariaLabelNext = 'Next',
      ...attributes
    },
    ref,
  ) => {
    const [hasPrev, setHasPrev] = useState<boolean>(true);
    const [hasNext, setHasNext] = useState<boolean>(true);

    const isHorizontal = direction === VsfSliderDirection.horizontal;
    const [containerRef, slider] = useSlider<HTMLDivElement>({
      reduceMotion: isReduceMotionEnabled,
      drag: draggable,
      vertical: !isHorizontal,
      onScroll: ({ hasPrev: prev, hasNext: next }) => {
        setHasPrev(prev);
        setHasNext(next);
      },
    });
    function onClickPrev() {
      return slider.current?.prev();
    }
    function onClickNext() {
      return slider.current?.next();
    }

    const prevButtonDefault = (
      <VsfButton
        variant={VsfButtonVariant.secondary}
        size={VsfButtonSize.lg}
        rounded
        className={classNames('vsf-slider__nav-arrow', { 'vsf-slider__nav-arrow--hidden': !hasPrev })}
        onClick={onClickPrev}
        disabled={!hasPrev}
        slotPrefix={isHorizontal ? <VsfIconChevronLeft /> : <VsfIconChevronUp />}
        aria-label={ariaLabelPrev}
      />
    );
    const nextButtonDefault = (
      <VsfButton
        variant={VsfButtonVariant.secondary}
        size={VsfButtonSize.lg}
        rounded
        className={classNames('vsf-slider__nav-arrow', { 'vsf-slider__nav-arrow--hidden': !hasNext })}
        onClick={onClickNext}
        disabled={!hasNext}
        slotPrefix={isHorizontal ? <VsfIconChevronRight /> : <VsfIconChevronDown />}
        aria-label={ariaLabelNext}
      />
    );
    const prevNavigation =
      typeof slotPrevButton === 'function' ? slotPrevButton({ onClick: onClickPrev, hasPrev }) : prevButtonDefault;
    const nextNavigation =
      typeof slotNextButton === 'function' ? slotNextButton({ onClick: onClickNext, hasNext }) : nextButtonDefault;

    return (
      <div
        ref={ref}
        className={classNames(
          'vsf-slider',
          `vsf-slider--${direction}`,
          {
            'vsf-slider--floating-nav': navigation === VsfSliderNavigation.floating,
            'vsf-slider--snap-scroll': scrollSnap,
          },
          className,
        )}
        {...attributes}
      >
        {navigation !== VsfSliderNavigation.none && (
          <div className="vsf-slider__nav vsf-slider__nav-prev">{prevNavigation}</div>
        )}

        <div
          ref={containerRef}
          className={classNames(
            'vsf-slider__container',
            scrollbar !== VsfSliderScrollbar.hidden && `vsf-slider__container--scroll-${scrollbar}`,
          )}
        >
          {children}
        </div>

        {navigation !== VsfSliderNavigation.none && (
          <div className="vsf-slider__nav vsf-slider__nav-next">{nextNavigation}</div>
        )}
      </div>
    );
  },
);

export default VsfSlider;
