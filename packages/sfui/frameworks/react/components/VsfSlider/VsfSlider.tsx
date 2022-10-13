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

export default function VsfSlider({ navigation, scrollbar, children, className, ...attributes }: VsfSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slider = useRef<Slider>();

  useEffect(() => {
    const sliderRefEl = sliderRef.current;
    slider.current = new Slider({
      containerSelector: '.vsf-slider__container',
      itemSelector: '.vsf-slider__item',
      navSelector: '.vsf-slider__nav',
    });
    const destroyVisible = slider.current.setVisibleSlides(sliderRefEl, 0.9);

    return () => {
      destroyVisible();
    };
  }, []);

  function goNext(next = true) {
    slider.current?.slideActive(sliderRef.current, next);
  }

  return (
    <div
      className={classNames(
        'vsf-slider',
        {
          'vsf-slider--floating-nav': navigation === NavigationDisplay.floating,
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
          onClick={() => goNext(false)}
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
          onClick={() => goNext(true)}
        >
          <VsfIconChevronRight />
        </VsfButton>
      )}
    </div>
  );
}
