import { useState, forwardRef, FocusEvent } from 'react';
import classNames from 'classnames';
import { isReduceMotionEnabled } from '@storefront-ui/shared';
import VsfButton from '../VsfButton/VsfButton';
import { VsfIconChevronLeft, VsfIconChevronDown, VsfIconChevronRight, VsfIconChevronUp } from '../VsfIcons';
import type { VsfScrollableProps } from './types';
import { VsfScrollableNavigation, VsfScrollableScrollbar, VsfScrollableDirection } from './types';
import { useScrollable } from './scrollable';
import { VsfButtonVariant, VsfButtonSize } from '../VsfButton';

const VsfScrollable = forwardRef<HTMLDivElement, VsfScrollableProps>(
  (
    {
      navigation = VsfScrollableNavigation.block,
      scrollbar = VsfScrollableScrollbar.hidden,
      direction = VsfScrollableDirection.horizontal,
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

    const isHorizontal = direction === VsfScrollableDirection.horizontal;
    const [containerRef, scrollable] = useScrollable<HTMLDivElement>({
      reduceMotion: isReduceMotionEnabled,
      drag: draggable,
      vertical: !isHorizontal,
      onScroll: ({ hasPrev: prev, hasNext: next }) => {
        setHasPrev(prev);
        setHasNext(next);
      },
    });
    function onClickPrev() {
      return scrollable.current?.prev();
    }
    function onClickNext() {
      return scrollable.current?.next();
    }

    const prevButtonDefault = (
      <VsfButton
        variant={VsfButtonVariant.secondary}
        size={VsfButtonSize.lg}
        rounded
        className={classNames('vsf-scrollable__nav-arrow', { 'vsf-scrollable__nav-arrow--hidden': !hasPrev })}
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
        className={classNames('vsf-scrollable__nav-arrow', { 'vsf-scrollable__nav-arrow--hidden': !hasNext })}
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

    const focusHandler = (event: FocusEvent) => {
      const elementIndex = Array.from(scrollable.current?.container.children as ArrayLike<Element>).findIndex(
        (el) => el === event.target,
      );
      scrollable.current?.scrollToIndex(elementIndex);
    };
    return (
      <div
        ref={ref}
        className={classNames(
          'vsf-scrollable',
          `vsf-scrollable--${direction}`,
          {
            'vsf-scrollable--floating-nav': navigation === VsfScrollableNavigation.floating,
            'vsf-scrollable--snap-scroll': scrollSnap,
          },
          className,
        )}
        {...attributes}
      >
        {navigation !== VsfScrollableNavigation.none && (
          <div className="vsf-scrollable__nav vsf-scrollable__nav-prev">{prevNavigation}</div>
        )}

        <div
          ref={containerRef}
          className={classNames(
            'vsf-scrollable__container',
            scrollbar !== VsfScrollableScrollbar.hidden && `vsf-scrollable__container--scroll-${scrollbar}`,
          )}
          onFocus={focusHandler}
        >
          {children}
        </div>

        {navigation !== VsfScrollableNavigation.none && (
          <div className="vsf-scrollable__nav vsf-scrollable__nav-next">{nextNavigation}</div>
        )}
      </div>
    );
  },
);

export default VsfScrollable;
