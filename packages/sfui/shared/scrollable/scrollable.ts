import { type ScrollableOptions, type SfScrollableOnScrollData, SfScrollableDirection } from './types';
import { isReduceMotionEnabled } from '../utils';

const defaultScrollableOptions: ScrollableOptions = {
  reduceMotion: isReduceMotionEnabled,
  direction: SfScrollableDirection.horizontal,
};

export default class Scrollable {
  public container: HTMLElement;
  private options: ScrollableOptions;
  private debounceId?: ReturnType<typeof setTimeout>;
  private dragScrollX: number;
  private dragScrollLeft: number;
  private dragScrollY: number;
  private dragScrollTop: number;

  #isDragged: boolean = false;
  private get isDragged() { return this.#isDragged; }
  private set isDragged(newValue: boolean) {
    if (newValue === this.#isDragged) return;
    this.#isDragged = newValue;
    this.options.onDragChange?.({ isDragged: this.#isDragged });
  }

  constructor(container: Element, ScrollableOptions?: Partial<ScrollableOptions>) {
    if (!(container instanceof HTMLElement))
      throw new Error(`SfScrollable: Container is not a HTMLElement! Received: ${container}`);
    this.container = container;
    this.options = {
      ...ScrollableOptions,
      reduceMotion: ScrollableOptions?.reduceMotion ?? defaultScrollableOptions.reduceMotion,
      direction: ScrollableOptions?.direction ?? defaultScrollableOptions.direction,
    };
    this.dragScrollX = 0;
    this.dragScrollLeft = 0;
    this.dragScrollY = 0;
    this.dragScrollTop = 0;
  }

  public register() {
    const removeListeners = this.addListeners();
    this.onScrollHandler();
    return removeListeners;
  }

  private addListeners() {
    const onScroll = this.onScroll.bind(this);
    const onResize = this.onResize.bind(this);
    this.container.addEventListener('scroll', onScroll, { passive: true });
    this.container.addEventListener('resize', onResize, { passive: true });

    if (this.options.drag) {
      const onMouseDown = this.onMouseDown.bind(this);
      const onMouseUp = this.onMouseUp.bind(this);
      const onMouseMove = this.onMouseMove.bind(this);
      const onMouseLeave = this.onMouseLeave.bind(this);

      this.container.addEventListener('mousedown', onMouseDown, { passive: false });
      this.container.addEventListener('mouseup', onMouseUp, { passive: true });
      this.container.addEventListener('mousemove', onMouseMove, { passive: false });
      this.container.addEventListener('mouseleave', onMouseLeave, { passive: true });

      return () => {
        this.container.removeEventListener('scroll', onScroll);
        this.container.removeEventListener('resize', onResize);
        this.container.removeEventListener('mousedown', onMouseDown);
        this.container.removeEventListener('mouseup', onMouseUp);
        this.container.removeEventListener('mousemove', onMouseMove);
        this.container.removeEventListener('mouseleave', onMouseLeave);
      };
    }

    return () => {
      this.container.removeEventListener('scroll', onScroll);
      this.container.removeEventListener('resize', onResize);
    };
  }

  public prev(): void {
    const { container, options } = this;
    if (options.direction === SfScrollableDirection.vertical) this.scrollTo({ top: container.scrollTop - container.clientHeight });
    else this.scrollTo({ left: container.scrollLeft - container.clientWidth });
  }

  public next(): void {
    const { container, options } = this;
    if (options.direction === SfScrollableDirection.vertical) this.scrollTo({ top: container.scrollTop + container.clientHeight });
    else this.scrollTo({ left: container.scrollLeft + container.clientWidth });
  }

  public scrollToIndex(index: number): void {
    const children = this.container.children;
    if (children[index]) {
      const { container } = this;
      const { top: containerTop, left: containerLeft } = container.getBoundingClientRect();
      const { top: childTop, left: childLeft, width: childWidth, height: childHeight } = children[index].getBoundingClientRect();

      if (this.options.direction === SfScrollableDirection.vertical) {
        const top = childTop - containerTop;
        const centerVertical = (container.clientHeight - childHeight) / 2;

        this.scrollTo({ top: container.scrollTop + top - centerVertical });
      } else {
        const left = childLeft - containerLeft;
        const centerHorizontal = (container.clientWidth - childWidth) / 2;

        this.scrollTo({ left: container.scrollLeft + left - centerHorizontal });
      }
    }
  }

  public refresh(callback?: (data: SfScrollableOnScrollData) => void) {
    if (callback) {
      requestAnimationFrame(() => {
        callback(this.calculate());
      });
    }
  }

  private onMouseUp() {
    this.isDragged = false;
  }

  private onMouseLeave() {
    this.isDragged = false;
  }

  private onMouseDown(event: MouseEvent) {
    event.preventDefault();
    const { container, options } = this;
    this.isDragged = true;

    if (options.direction === SfScrollableDirection.vertical) {
      this.dragScrollY = event.pageY - container.offsetTop;
      this.dragScrollTop = container.scrollTop;
    } else {
      this.dragScrollX = event.pageX - container.offsetLeft;
      this.dragScrollLeft = container.scrollLeft;
    }
  }

  private onMouseMove(event: MouseEvent) {
    if (!this.isDragged) return;
    event.preventDefault();

    const sensitivity = typeof this.options.drag === 'object' ? this.options.drag.sensitivity : 4;

    const { container, options } = this;
    if (options.direction === SfScrollableDirection.vertical) {
      const element = event.pageY - container.offsetTop;
      const scrolling = (element - this.dragScrollY) * sensitivity;
      container.scrollTop = this.dragScrollTop - scrolling;
    } else {
      const element = event.pageX - container.offsetLeft;
      const scrolling = (element - this.dragScrollX) * sensitivity;
      container.scrollLeft = this.dragScrollLeft - scrolling;
    }
  }

  private scrollTo({ left, top }: { left?: number; top?: number }): void {
    const behavior = this.options.reduceMotion ? 'auto' : 'smooth';
    this.container.scrollTo({ left, top, behavior });
  }

  private onScroll(): void {
    if (!this.container) return;

    clearTimeout(this.debounceId);
    this.debounceId = setTimeout(this.onScrollHandler.bind(this), 50);
  }

  private onResize(): void {
    const container = this.container;
    if (!container) return;

    this.refresh(this.options.onScroll);
  }

  private onScrollHandler() {
    this.refresh(this.options.onScroll);
  }

  private get hasNext()  {
    if (this.options.direction === SfScrollableDirection.vertical) {
      return this.container.scrollHeight > this.container.scrollTop + this.container.clientHeight;
    }
    return this.container.scrollWidth > this.container.scrollLeft + this.container.clientWidth;
  };

  private get hasPrev() {
    if (this.options.direction === SfScrollableDirection.vertical) {
      return !!this.container.scrollTop;
    }
    return !!this.container.scrollLeft;
  };

  private calculate(): SfScrollableOnScrollData {
    return {
      left: this.container.scrollLeft,
      width: this.container.clientWidth,
      scrollWidth: this.container.scrollWidth,
      hasPrev: this.hasPrev,
      hasNext: this.hasNext,
    };
  }
}
