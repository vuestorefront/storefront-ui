/* eslint-disable @typescript-eslint/no-unused-expressions */
import { findLast } from './utils';

interface Config {
  containerSelector?: string;
  visibleItemClass?: string;
  itemSelector?: string;
  firstItemVisibleClass?: string;
  lastItemVisibleClass?: string;
  navSelector?: string;
  navNextClass?: string;
}

const defaultConfig: Required<Config> = {
  containerSelector: '.slider-container',
  visibleItemClass: 'slide-visible',
  itemSelector: '.slider-item',
  firstItemVisibleClass: 'slider-item-first-visible',
  lastItemVisibleClass: 'slider-item-last-visible',
  navSelector: '.slider-nav',
  navNextClass: 'slider-nav--next',
};

type Nullable<T> = T | null | undefined;

const noOp = () => {};

export default class Slider {
  private config: Required<Config>;

  constructor(config?: Config) {
    this.config = { ...defaultConfig, ...config };
  }

  init(sliderElement: Nullable<Element>, threshold: IntersectionObserverInit['threshold'] = 0.9) {
    if (!sliderElement) return noOp;
    const navItems = sliderElement.querySelectorAll(this.config.navSelector);
    navItems.forEach((nav) => {
      nav.addEventListener('click', () =>
        this.slideActive(sliderElement, nav.classList.contains(this.config.navNextClass)),
      );
    });
    const destroy = this.setVisibleSlides(sliderElement, threshold);
    return () => {
      destroy();
      navItems.forEach((nav) => {
        nav.removeEventListener('click', () =>
          this.slideActive(sliderElement, nav.classList.contains(this.config.navSelectorNext)),
        );
      });
    };
  }

  setVisibleSlides(sliderElement: Nullable<Element>, threshold: IntersectionObserverInit['threshold'] = 0.9) {
    if (!(sliderElement && window.IntersectionObserver)) return noOp;
    const container = sliderElement.querySelector(this.config.containerSelector);
    const observer = new IntersectionObserver(
      (slides) => {
        slides.forEach((slide) =>
          slide.isIntersecting
            ? slide.target.classList.add(this.config.visibleItemClass)
            : slide.target.classList.remove(this.config.visibleItemClass),
        );
        container?.firstElementChild?.classList.contains(this.config.visibleItemClass)
          ? sliderElement?.classList.add(this.config.firstItemVisibleClass)
          : sliderElement?.classList.remove(this.config.firstItemVisibleClass);
        container?.lastElementChild?.classList.contains(this.config.visibleItemClass)
          ? sliderElement.classList.add(this.config.lastItemVisibleClass)
          : sliderElement.classList.remove(this.config.lastItemVisibleClass);
      },
      {
        root: container,
        threshold,
      },
    );
    sliderElement.querySelectorAll(this.config.itemSelector).forEach((slide) => observer?.observe(slide));
    return () => observer?.disconnect();
  }

  slideActive(sliderElement: Nullable<Element>, next = true, options?: ScrollIntoViewOptions) {
    const children = this.getContainerChildren(sliderElement);
    if (next) {
      this.slideActiveNext(children, options);
    } else {
      this.slideActivePrev(children, options);
    }
  }

  slideToIndex(
    sliderElement: Nullable<Element>,
    index: number,
    options: ScrollIntoViewOptions = { inline: 'start', block: 'start' },
  ) {
    const children = this.getContainerChildren(sliderElement);
    this.slideToElement(children[index], options);
  }

  // eslint-disable-next-line class-methods-use-this
  slideToElement(element: Nullable<Element>, options: ScrollIntoViewOptions = { inline: 'start', block: 'nearest' }) {
    element?.scrollIntoView(options);
  }

  slideActiveNext(children: Element[], options: ScrollIntoViewOptions = { inline: 'start', block: 'nearest' }) {
    const nextAfterLastVisible = findLast<Element>(children, (el) =>
      el.classList.contains(this.config.visibleItemClass),
    )?.nextElementSibling;
    this.slideToElement(nextAfterLastVisible, options);
  }

  slideActivePrev(children: Element[], options: ScrollIntoViewOptions = { inline: 'end', block: 'nearest' }) {
    const previousBeforeFirstVisible = children.find((el) =>
      el.classList.contains(this.config.visibleItemClass),
    )?.previousElementSibling;
    this.slideToElement(previousBeforeFirstVisible, options);
  }

  getContainerChildren(sliderElement: Nullable<Element>) {
    const container = sliderElement?.querySelector(this.config.containerSelector);
    if (!container) return [];
    return Array.from(container.children);
  }

  onContainerResize(
    sliderElement: Nullable<Element>,
    callback: ResizeObserverCallback,
    options?: ResizeObserverOptions,
  ) {
    if (!(sliderElement && window.ResizeObserver)) return noOp;
    const resizeObserver = new ResizeObserver(callback);
    const container = sliderElement.querySelector(this.config.containerSelector);
    if (container) {
      resizeObserver.observe(container, options);
    }
    return () => resizeObserver?.disconnect();
  }

  onSlideEnd(sliderElement: Nullable<Element>, delegate: (e?: Event) => void, timeout = 125) {
    if (!sliderElement) return noOp;
    let isScrolling: NodeJS.Timeout;

    function handler(e: Event) {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => delegate(e), timeout);
    }
    const container = sliderElement.querySelector(this.config.containerSelector);
    if (container) {
      container.addEventListener('scroll', handler, { capture: false, passive: true });
    }
    return () => container?.removeEventListener('scroll', handler);
  }
}
