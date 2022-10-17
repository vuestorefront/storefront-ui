import { useState } from 'react';
import classNames from 'classnames';
import VsfButton from '../VsfButton/VsfButton';
import VsfIconChevronLeft from '../VsfIcons/VsfIconChevronLeft';
import VsfIconChevronRight from '../VsfIcons/VsfIconChevronRight';
import type { VsfSliderProps } from './types';
import { VsfSliderNavigation, VsfSliderScrollbar } from './types';
import { useSlider } from '../../shared/slider/react';
import { VsfButtonVariants } from '../VsfButton';

export default function VsfSlider({
  navigation,
  scrollbar,
  showMobileNavigation,
  scrollSnap,
  draggable,
  children,
  className,
  ...attributes
}: VsfSliderProps) {
  const [hasPrev, setHasPrev] = useState<boolean>(true);
  const [hasNext, setHasNext] = useState<boolean>(true);

  const [containerRef, slider] = useSlider<HTMLDivElement>({
    reduceMotion: typeof window !== 'undefined' && window?.matchMedia('(prefers-reduced-motion: reduce)').matches,
    drag: draggable,
    onScroll: ({ hasPrev: prev, hasNext: next }) => {
      setHasPrev(prev);
      setHasNext(next);
    },
  });

  return (
    <div
      className={classNames(
        'vsf-slider',
        {
          'vsf-slider--floating-nav': navigation === VsfSliderNavigation.floating,
          'vsf-slider--mobile-nav': showMobileNavigation,
          'vsf-slider--snap-scroll': scrollSnap,
        },
        className,
      )}
      {...attributes}
    >
      {navigation && (
        <VsfButton
          variant={VsfButtonVariants.secondary}
          icon
          rounded
          className={classNames(['vsf-slider__nav vsf-slider__nav-prev'], { 'vsf-slider__nav--hidden': !hasPrev })}
          onClick={() => slider.current?.prev()}
        >
          <VsfIconChevronLeft />
        </VsfButton>
      )}

      <div
        ref={containerRef}
        className={classNames([
          'vsf-slider__container',
          {
            'scrollbar-hidden': !scrollbar,
            'vsf-slider__container--scroll': scrollbar === VsfSliderScrollbar.always,
          },
        ])}
      >
        {children}
      </div>

      {navigation && (
        <VsfButton
          variant={VsfButtonVariants.secondary}
          className={classNames(['vsf-slider__nav vsf-slider__nav-next'], { 'vsf-slider__nav--hidden': !hasNext })}
          icon
          rounded
          onClick={() => slider.current?.next()}
        >
          <VsfIconChevronRight />
        </VsfButton>
      )}
    </div>
  );
}
