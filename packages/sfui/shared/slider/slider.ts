/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/lines-between-class-members */

import type { Options, VSFSliderData } from './types';

const defaultOptions: Options = {
  reduceMotion: false, // https://web.dev/prefers-reduced-motion/
  snap: false,
  drag: undefined,
};

const DRAGGING_CLASS = 'vsf-slider__container--dragging';

export default class VSFSlider {
  private container: HTMLElement;
  private options: Options;
  private delta: number; // rounding
  private debounceId?: ReturnType<typeof setTimeout>;
  private pagewidth: number;

  // mouse drag
  private dragDown?: boolean;
  private dragScrollX: number;
  private dragScrollLeft: number;

  constructor(container: Element, options?: Partial<Options>) {
    if (!(container instanceof HTMLElement))
      throw new Error(`VSFSlider: Container is not a HTMLElement! Received: ${container}`);
    this.container = container;
    this.options = { ...defaultOptions, ...options };
    this.delta = 2.5;
    this.pagewidth = 1;
    this.dragScrollX = 0;
    this.dragScrollLeft = 0;
    this.init();
  }

  /**
   * Initialize event listeners
   *
   * @return void
   */
  public init() {
    this.addListeners();
    this.onScrollHandler();
  }

  /**
   * Destroys event listeners
   * @param {Partial<Options>} options slider options
   *
   * @return void
   */
  public update(options?: Partial<Options>) {
    this.removeListeners();
    this.options = { ...defaultOptions, ...options };
    this.init();
  }

  /**
   * Destroys event listeners
   *
   * @return void
   */
  public destroy() {
    this.removeListeners();
  }
  /**
   * Scroll to previous page
   *
   * @return void
   */
  public prev(): void {
    const { container, delta } = this;
    const gap = this.offset();
    const { left } = container.getBoundingClientRect();
    const x = left + container.clientWidth * -this.pagewidth + gap - delta;
    const element = this.findPrevSlot(x);
    if (element) {
      const width = element.getBoundingClientRect().left - left;
      this.scrollToLeft(container.scrollLeft + width);
      return;
    }
    const width = container.clientWidth * this.pagewidth;
    this.scrollToLeft(container.scrollLeft - width);
  }
  /**
   * Scroll to next page
   *
   * @return void
   */
  public next(): void {
    const { container, delta } = this;
    const { left } = container.getBoundingClientRect();
    const x = left + container.clientWidth * this.pagewidth + delta;
    const element = this.findNextSlot(x);
    if (element) {
      const width = element.getBoundingClientRect().left - left;
      if (width > delta) {
        this.scrollToLeft(container.scrollLeft + width);
        return;
      }
    }
    const width = container.clientWidth * this.pagewidth;
    this.scrollToLeft(container.scrollLeft + width);
  }
  /**
   * Scroll to element index
   * @param {number} index scroll item index
   *
   * @return void
   */
  public scrollToIndex(index: number): void {
    const children = this.children();
    if (children[index]) {
      const { container } = this;
      const rect = children[index].getBoundingClientRect();
      const left = rect.left - container.getBoundingClientRect().left;
      this.scrollToLeft(container.scrollLeft + left);
    }
  }
  /**
   * Recalculates scroll metrics
   *
   * @return void
   * */
  // eslint-disable-next-line @typescript-eslint/lines-between-class-members
  public refresh(callback?: (data: VSFSliderData) => void) {
    requestAnimationFrame(() => {
      const data = this.calculate();
      callback?.(data);
    });
  }

  private onMouseUp() {
    this.dragDown = false;
    setTimeout(() => {
      this.container.classList.remove(DRAGGING_CLASS);
    }, 50);
  }

  private onMouseLeave() {
    this.dragDown = false;
    this.container.classList.remove(DRAGGING_CLASS);
  }

  private onMouseDown(e: MouseEvent) {
    e.preventDefault();
    const { container } = this;
    this.dragDown = true;
    this.dragScrollX = e.pageX - container.offsetLeft;
    this.dragScrollLeft = container.scrollLeft;
    container.classList.add(DRAGGING_CLASS);
  }

  private onMouseMove(e: MouseEvent) {
    if (!this.dragDown) return;
    e.preventDefault();

    const sensitivity = this.options.drag?.sensitivity ?? 4;

    const { container } = this;
    const element = e.pageX - container.offsetLeft;
    const scrolling = (element - this.dragScrollX) * sensitivity;
    container.scrollLeft = this.dragScrollLeft - scrolling;
  }

  private addListeners() {
    this.container.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
    if (this.options.drag) {
      this.container.addEventListener('mousedown', this.onMouseDown.bind(this), { passive: false });
      this.container.addEventListener('mouseup', this.onMouseUp.bind(this), { passive: true });
      this.container.addEventListener('mousemove', this.onMouseMove.bind(this), { passive: false });
      this.container.addEventListener('mouseleave', this.onMouseLeave.bind(this), { passive: true });
    }
  }

  private removeListeners() {
    this.container.removeEventListener('scroll', this.onScroll.bind(this));
    if (this.options.drag) {
      this.container.removeEventListener('mousedown', this.onMouseDown.bind(this));
      this.container.removeEventListener('mouseup', this.onMouseUp.bind(this));
      this.container.removeEventListener('mousemove', this.onMouseMove.bind(this));
      this.container.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
    }
  }

  private children() {
    return this.container.children;
  }

  private offset() {
    return parseInt(window.getComputedStyle(this.container).scrollPaddingLeft, 10);
  }

  private findPrevSlot(x: number): Element | undefined {
    const children = this.children();
    const gap = this.offset();
    for (let i = 0; i < children.length; i++) {
      const rect = children[i].getBoundingClientRect();

      if (rect.left - gap >= x && x <= rect.right + gap) {
        return children[i];
      }
      if (rect.left - gap >= x) {
        return children[i];
      }
    }
    return undefined;
  }

  private findNextSlot(x: number): Element | undefined {
    const children = this.children();
    for (let i = 0; i < children.length; i++) {
      const rect = children[i].getBoundingClientRect();
      if (rect.right > x) {
        if (rect.left <= x) {
          return children[i];
        }
        if (x <= rect.left) {
          return children[i];
        }
      }
    }
    return undefined;
  }

  private scrollToLeft(left: number): void {
    const { container } = this;
    const behavior = this.options.reduceMotion ? 'auto' : 'smooth';
    container.scrollTo({ left, behavior });
  }

  private onScroll(): void {
    const container = this.container as Element;
    if (!container) return;

    clearTimeout(this.debounceId);
    this.debounceId = setTimeout(this.onScrollHandler.bind(this), 50);
  }

  private onScrollHandler() {
    this.refresh((data) => this.options.onScroll?.(data));
  }

  private calculate(): VSFSliderData {
    const { container, delta } = this;
    const firstChild = this.children()[0];

    function hasNext() {
      return container.scrollWidth > container.scrollLeft + container.clientWidth + delta;
    }

    function hasPrev() {
      if (container.scrollLeft === 0) {
        return false;
      }
      const containerVWLeft = container.getBoundingClientRect().left;
      const firstChildLeft = firstChild?.getBoundingClientRect()?.left ?? 0;
      return Math.abs(containerVWLeft - firstChildLeft) >= delta;
    }

    return {
      left: container.scrollLeft,
      width: container.clientWidth,
      scrollWidth: container.scrollWidth,
      hasPrev: hasPrev(),
      hasNext: hasNext(),
    };
  }
}
