import { useState, useRef, SyntheticEvent, useEffect, ReactNode } from 'react';
import { swiffyslider } from 'swiffy-slider';
import { findLast } from '@sfui/sfui/shared/utils';
import classNames from 'classnames';
import VsfButton from '../VsfButton/VsfButton';
import VsfIconChevronLeft from '../VsfIcons/VsfIconChevronLeft';
import VsfIconChevronRight from '../VsfIcons/VsfIconChevronRight';
import type { VsfSliderProps } from './types';
import { ScrollbarDisplay, NavigationDisplay } from './types';

export function VsfSliderItem({ children }: { children: ReactNode }) {
  return <div className="slider-item vsf-slider__item">{children}</div>;
}

export default function VsfSlider({ navigation, scrollbar, children, ...attributes }: VsfSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const items = useRef<Element[]>([]);
  const [hidePrevButton, setHidePrevButton] = useState(() => false);
  const [hideNextButton, setHideNextButton] = useState(() => false);

  function setChevrons(target: Element) {
    if (!navigation) return;
    const maxScrollLeft = Math.floor(target.scrollWidth - target.clientWidth);
    setHidePrevButton(target.scrollLeft === 0);
    setHideNextButton(Math.ceil(target.scrollLeft) >= maxScrollLeft);
  }
  function onScroll(event: SyntheticEvent<HTMLElement>) {
    setChevrons(event.currentTarget);
  }
  useEffect(() => {
    const sliderRefEl = sliderRef.current;
    let resizeObserver: ResizeObserver | undefined;
    if (sliderRefEl) {
      swiffyslider.setVisibleSlides(sliderRefEl, 0.9);
      const container = sliderRefEl.querySelector('.slider-container');
      if (container) {
        items.current = Array.from(container.children as ArrayLike<Element>);
        resizeObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            requestIdleCallback(() => setChevrons(entry.target));
          });
        });

        resizeObserver.observe(container, { box: 'border-box' });
      }
    }
    return () => resizeObserver?.disconnect();
  }, []);

  function go(direct: string) {
    if (direct === 'next') {
      const nextAfterLastVisible = findLast<Element>(items.current, (el) =>
        el.classList.contains('slide-visible'),
      )?.nextElementSibling;
      nextAfterLastVisible?.scrollIntoView({ inline: 'start', block: 'start' });
    } else {
      const previousBeforeFirstVisible = items.current.find((el) =>
        el.classList.contains('slide-visible'),
      )?.previousElementSibling;
      previousBeforeFirstVisible?.scrollIntoView({ inline: 'end', block: 'end' });
    }
  }

  return (
    <div>
      {hidePrevButton.toString()}
      {hideNextButton.toString()}

      <div
        className={classNames('swiffy-slider vsf-slider', {
          'vsf-slider--floating-nav': navigation === NavigationDisplay.floating,
        })}
        {...attributes}
        ref={sliderRef}
      >
        {navigation && (
          <VsfButton
            variant="secondary"
            icon
            rounded
            className={classNames([
              'vsf-slider__nav vsf-slider__nav-prev',
              { 'vsf-slider__nav--hidden': hidePrevButton },
            ])}
            onClick={() => go('prev')}
          >
            <VsfIconChevronLeft />
          </VsfButton>
        )}

        <div
          onScroll={onScroll}
          className={classNames([
            'slider-container vsf-slider__container',
            {
              'scrollbar-hidden': !scrollbar,
              'vsf-slider__container--scroll-always': scrollbar === ScrollbarDisplay.always,
            },
          ])}
        >
          {children}
        </div>

        {navigation && (
          <VsfButton
            variant="secondary"
            className={classNames([
              'vsf-slider__nav vsf-slider__nav-next',
              { 'vsf-slider__nav--hidden': hideNextButton },
            ])}
            icon
            rounded
            onClick={() => go('next')}
          >
            <VsfIconChevronRight />
          </VsfButton>
        )}
      </div>
    </div>
  );
}
