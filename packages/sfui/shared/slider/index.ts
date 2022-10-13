/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable @typescript-eslint/no-unused-expressions */

function findLast<T>(array: Array<T>, predicate: (value: T, index: number, obj: T[]) => boolean): T | undefined {
  let l = array.length;
  // eslint-disable-next-line no-plusplus
  while (l--) {
    if (predicate(array[l], l, array)) return array[l];
  }
  return undefined;
}

interface Config {
  containerSelector?: string;
  visibleItemClass?: string;
  itemSelector?: string;
  firstItemVisibleClass?: string;
  lastItemVisibleClass?: string;
  navSelector?: string;
  navNextClass?: string;
  intersectionThreshold?: IntersectionObserverInit['threshold'];
  reduceMotion?: boolean;
}

const defaultConfig: Required<Config> = {
  containerSelector: '.slider-container',
  visibleItemClass: 'slide-visible',
  itemSelector: '.slider-item',
  firstItemVisibleClass: 'slider-item-first-visible',
  lastItemVisibleClass: 'slider-item-last-visible',
  navSelector: '.slider-nav',
  navNextClass: 'slider-nav--next',
  intersectionThreshold: 0.9,
  reduceMotion: false,
};

type Nullable<T> = T | null | undefined;

export default class Slider {
  config: Required<Config>;
  root: HTMLElement;
  scrollContainer: Element;
  carouselItems: Element[];
  prevButton: Nullable<Element>;
  nextButton: Nullable<Element>;
  intersectionObserver: IntersectionObserver;
  mutationObserver: MutationObserver;

  constructor(root: HTMLElement, config?: Config) {
    if (!root) throw new Error(`Root Element is required`);
    this.config = { ...defaultConfig, ...config };
    this.root = root;
    const scrollContainerElement = root.querySelector(this.config.containerSelector);
    if (!scrollContainerElement)
      throw new Error(`Scroll Container Element can not be found: ${this.config.containerSelector}`);
    this.scrollContainer = scrollContainerElement;
    this.carouselItems = [];
    this.prevButton = null;
    this.nextButton = null;
  }

  initialize() {
    this.setVisibleSlides();
    this.setNavigation();
    this.setCarouselVisibility();
    this.onContainerUpdate();
  }

  destroy() {
    this.unobserveCarouselItems();
    this.nextButton?.removeEventListener('click', this.onNextButtonClick.bind(this));
    this.prevButton?.removeEventListener('click', this.onPrevButtonClick.bind(this));
    this.intersectionObserver.disconnect();
    this.mutationObserver.disconnect();
  }

  setNavigation() {
    const navItems = this.root.querySelectorAll(this.config.navSelector);
    navItems.forEach((nav) => {
      if (nav.classList.contains(this.config.navNextClass)) {
        this.nextButton = nav;
      } else {
        this.prevButton = nav;
      }
    });
    this.nextButton?.addEventListener('click', this.onNextButtonClick);
    this.prevButton?.addEventListener('click', this.onPrevButtonClick);
  }

  unobserveCarouselItems() {
    this.carouselItems.forEach((t) => {
      this.intersectionObserver.unobserve(t);
    });
  }

  observeCarouselItems() {
    this.carouselItems.forEach((t) => {
      this.intersectionObserver.observe(t);
    });
  }

  onNextButtonClick() {
    const nextAfterLastVisible = findLast(this.carouselItems, (el) =>
      el.classList.contains(this.config.visibleItemClass),
    )?.nextElementSibling;
    this.slideToElement(nextAfterLastVisible, {
      inline: 'start',
      block: 'nearest',
      behavior: this.config.reduceMotion ? 'auto' : 'smooth',
    });
  }

  setCarouselVisibility() {
    this.unobserveCarouselItems();
    this.carouselItems = Array.from(this.scrollContainer?.children || []);
    this.observeCarouselItems();
  }

  onContainerUpdate() {
    this.mutationObserver = new MutationObserver((items) => {
      items.filter(({ type }) => type === 'childList').length && this.setCarouselVisibility();
    });
    this.mutationObserver.observe(this.scrollContainer, {
      childList: true,
      subtree: true,
    });
  }

  onPrevButtonClick() {
    const previousBeforeFirstVisible = this.carouselItems.find((el) =>
      el.classList.contains(this.config.visibleItemClass),
    )?.previousElementSibling;
    this.slideToElement(previousBeforeFirstVisible, {
      inline: 'end',
      block: 'nearest',
      behavior: this.config.reduceMotion ? 'auto' : 'smooth',
    });
  }
  // eslint-disable-next-line class-methods-use-this
  slideToElement(element: Nullable<Element>, options: ScrollIntoViewOptions) {
    element?.scrollIntoView(options);
  }

  setVisibleSlides() {
    this.intersectionObserver = new IntersectionObserver(
      (slides) => {
        slides.forEach((slide) =>
          slide.isIntersecting
            ? slide.target.classList.add(this.config.visibleItemClass)
            : slide.target.classList.remove(this.config.visibleItemClass),
        );
        // set class to the root element when first/last element is visible
        this.scrollContainer?.firstElementChild?.classList.contains(this.config.visibleItemClass)
          ? this.root?.classList.add(this.config.firstItemVisibleClass)
          : this.root?.classList.remove(this.config.firstItemVisibleClass);
        this.scrollContainer?.lastElementChild?.classList.contains(this.config.visibleItemClass)
          ? this.root.classList.add(this.config.lastItemVisibleClass)
          : this.root.classList.remove(this.config.lastItemVisibleClass);
      },
      {
        root: this.scrollContainer,
        threshold: this.config.intersectionThreshold,
      },
    );
  }
}
