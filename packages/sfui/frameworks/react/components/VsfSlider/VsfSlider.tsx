import { useRef, useEffect, ReactNode } from 'react';
import classNames from 'classnames';
import VsfButton from '../VsfButton/VsfButton';
import VsfIconChevronLeft from '../VsfIcons/VsfIconChevronLeft';
import VsfIconChevronRight from '../VsfIcons/VsfIconChevronRight';
import type { VsfSliderProps } from './types';
import { ScrollbarDisplay, NavigationDisplay } from './types';
import Slider from '../../shared/slider';

export function VsfSliderItem({ children }: { children: ReactNode }) {
  return <div className="vsf-slider__item">{children}</div>;
}

export default function VsfSlider({
  navigation,
  scrollbar,
  showMobileNavigation,
  scrollSnap,
  children,
  className,
  ...attributes
}: VsfSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slider = useRef<Slider>();

  useEffect(() => {
    if (!slider.current && sliderRef.current) {
      slider.current = new Slider(sliderRef.current, {
        containerSelector: '.vsf-slider__container',
        itemSelector: '.vsf-slider__item',
        reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        intersectionThreshold: 0.9,
      });
    }
    slider.current?.initialize();

    return () => {
      slider.current?.destroy();
    };
  }, []);

  return (
    <div
      className={classNames(
        'vsf-slider',
        {
          'vsf-slider--floating-nav': navigation === NavigationDisplay.floating,
          'vsf-slider--mobile-nav': showMobileNavigation,
          'vsf-slider--snap-scroll': scrollSnap,
        },
        className,
      )}
      {...attributes}
      ref={sliderRef}
    >
      {navigation && (
        <VsfButton
          variant="secondary"
          icon
          rounded
          className={classNames(['vsf-slider__nav vsf-slider__nav-prev'])}
          onClick={() => slider.current?.prev()}
        >
          <VsfIconChevronLeft />
        </VsfButton>
      )}

      <div
        className={classNames([
          'vsf-slider__container',
          {
            'scrollbar-hidden': !scrollbar,
            'vsf-slider__container--scroll': scrollbar === ScrollbarDisplay.always,
          },
        ])}
      >
        {children}
      </div>

      {navigation && (
        <VsfButton
          variant="secondary"
          className={classNames(['vsf-slider__nav vsf-slider__nav-next'])}
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
