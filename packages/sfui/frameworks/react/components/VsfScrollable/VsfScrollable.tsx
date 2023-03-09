import { useState, forwardRef, FocusEvent, useRef, useEffect, type KeyboardEvent } from 'react';
import classNames from 'classnames';
import { isReduceMotionEnabled } from '@storefront-ui/shared';
import VsfButton from '../VsfButton/VsfButton';
import { VsfIconChevronLeft, VsfIconExpandMore, VsfIconChevronRight, VsfIconExpandLess } from '../VsfIcons';
import type { VsfScrollableProps } from './types';
import { VsfScrollableNavigation, VsfScrollableScrollbar, VsfScrollableDirection } from './types';
import { useScrollable } from './useScrollable';
import { VsfButtonVariant, VsfButtonSize } from '../VsfButton';
import { useTrapFocus, InitialFocusType } from '../../shared/useTrapFocus/useTrapFocus';

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
    const containerElementRef = useRef<HTMLDivElement>(null);

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
    useEffect(() => {
      containerRef(containerElementRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerElementRef.current]);

    function onClickPrev() {
      return scrollable.current?.prev();
    }
    function onClickNext() {
      return scrollable.current?.next();
    }
    useTrapFocus(containerElementRef, {
      arrowFocusGroupSelector: '[data-group]',
      trapTabs: false,
      initialFocus: InitialFocusType.none,
      arrowKeysOn: true,
    });

    const prevButtonDefault = (
      <VsfButton
        variant={VsfButtonVariant.secondary}
        size={VsfButtonSize.lg}
        rounded
        className="vsf-scrollable__nav-arrow"
        onClick={onClickPrev}
        disabled={!hasPrev}
        slotPrefix={isHorizontal ? <VsfIconChevronLeft /> : <VsfIconExpandLess />}
        aria-label={ariaLabelPrev}
        tabIndex="-1"
      />
    );
    const nextButtonDefault = (
      <VsfButton
        variant={VsfButtonVariant.secondary}
        size={VsfButtonSize.lg}
        rounded
        className="vsf-scrollable__nav-arrow"
        onClick={onClickNext}
        disabled={!hasNext}
        slotPrefix={isHorizontal ? <VsfIconChevronRight /> : <VsfIconExpandMore />}
        aria-label={ariaLabelNext}
        tabIndex="-1"
      />
    );
    const prevNavigation =
      typeof slotPrevButton === 'function' ? slotPrevButton({ onClick: onClickPrev, hasPrev }) : prevButtonDefault;
    const nextNavigation =
      typeof slotNextButton === 'function' ? slotNextButton({ onClick: onClickNext, hasNext }) : nextButtonDefault;

    const focusHandler = (event: FocusEvent) => {
      const groupElement = (event?.target as HTMLElement)?.closest('[data-group]');
      if (groupElement) {
        const groupElementIndex = Array.from(containerElementRef.current?.children as HTMLCollection).indexOf(
          groupElement,
        );
        scrollable.current?.scrollToIndex(groupElementIndex);
      }
    };
    const onKeyDownContainer = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
      }
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
          <div
            className={classNames('vsf-scrollable__nav', 'vsf-scrollable__nav-prev', {
              'vsf-scrollable__nav-arrow--hidden': !hasPrev,
            })}
          >
            {prevNavigation}
          </div>
        )}

        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          ref={containerElementRef}
          className={classNames(
            'vsf-scrollable__container',
            scrollbar !== VsfScrollableScrollbar.hidden && `vsf-scrollable__container--scroll-${scrollbar}`,
          )}
          onFocus={focusHandler}
          onKeyDown={onKeyDownContainer}
        >
          {children}
        </div>
        {navigation !== VsfScrollableNavigation.none && (
          <div
            className={classNames('vsf-scrollable__nav', 'vsf-scrollable__nav-next', {
              'vsf-scrollable__nav-arrow--hidden': !hasNext,
            })}
          >
            {nextNavigation}
          </div>
        )}
      </div>
    );
  },
);

export default VsfScrollable;
