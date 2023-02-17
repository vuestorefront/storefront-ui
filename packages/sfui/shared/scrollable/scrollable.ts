import type { VsfScrollableOptions, VsfScrollableCallbackData } from './types';

const defaultVsfScrollableOptions: VsfScrollableOptions = {
  reduceMotion: false,
  snap: false,
  drag: undefined,
  vertical: false,
};

const DRAGGING_CLASS = 'vsf-scrollable__container--dragging';

export default class VSFScrollable {
  public container: HTMLElement;
  private options: VsfScrollableOptions;
  private debounceId?: ReturnType<typeof setTimeout>;
  private isDragged?: boolean;
  private dragScrollX: number;
  private dragScrollLeft: number;
  private dragScrollY: number;
  private dragScrollTop: number;

  private scrollListenerInstance: (event: Event) => void = () => undefined;
  private resizeListenerInstance: () => void = () => undefined;
  private mouseDownListenerInstance: (event: MouseEvent) => void = () => undefined;
  private mouseUpListenerInstance: (event: MouseEvent) => void = () => undefined;
  private mouseMoveListenerInstance: (event: MouseEvent) => void = () => undefined;
  private mouseLeaveListenerInstance: (event: MouseEvent) => void = () => undefined;

  constructor(container: Element, VsfScrollableOptions?: Partial<VsfScrollableOptions>) {
    if (!(container instanceof HTMLElement))
      throw new Error(`VsfScrollable: Container is not a HTMLElement! Received: ${container}`);
    this.container = container;
    this.options = { ...defaultVsfScrollableOptions, ...VsfScrollableOptions };
    this.dragScrollX = 0;
    this.dragScrollLeft = 0;
    this.dragScrollY = 0;
    this.dragScrollTop = 0;
    this.init();
  }

  public init() {
    this.addListeners();
    this.onScrollHandler();
  }

  public update(VsfScrollableOptions?: Partial<VsfScrollableOptions>) {
    this.options = { ...defaultVsfScrollableOptions, ...VsfScrollableOptions };
    this.removeListeners();
    this.init();
  }

  public destroy() {
    this.removeListeners();
  }

  public prev(): void {
    const { container, options } = this;
    if (options.vertical) this.scrollTo({ top: container.scrollTop - container.clientHeight });
    else this.scrollTo({ left: container.scrollLeft - container.clientWidth });
  }

  public next(): void {
    const { container, options } = this;
    if (options.vertical) this.scrollTo({ top: container.scrollTop + container.clientHeight });
    else this.scrollTo({ left: container.scrollLeft + container.clientWidth });
  }

  public scrollToIndex(index: number): void {
    const children = this.children();
    if (children[index]) {
      const { container } = this;
      const rect = children[index].getBoundingClientRect();
      const left = rect.left - container.getBoundingClientRect().left;
      const top = rect.top - container.getBoundingClientRect().top;
      const centerHorizontal = container.clientWidth / 2 - rect.width / 2;
      const centerVertical = container.clientHeight / 2 - rect.height / 2;

      if (this.options.vertical) this.scrollTo({ top: container.scrollTop + top - centerVertical });
      else this.scrollTo({ left: container.scrollLeft + left - centerHorizontal });
    }
  }

  public refresh(callback?: (data: VsfScrollableCallbackData) => void) {
    requestAnimationFrame(() => {
      const data = this.calculate();
      callback?.(data);
    });
  }

  private onMouseUp() {
    this.isDragged = false;
    setTimeout(() => {
      this.container.classList.remove(DRAGGING_CLASS);
    }, 50);
  }

  private onMouseLeave() {
    this.isDragged = false;
    this.container.classList.remove(DRAGGING_CLASS);
  }

  private onMouseDown(event: MouseEvent) {
    event.preventDefault();
    const { container, options } = this;
    this.isDragged = true;
    container.classList.add(DRAGGING_CLASS);

    if (options.vertical) {
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

    const sensitivity = this.options.drag?.sensitivity ?? 4;

    const { container, options } = this;
    if (options.vertical) {
      const element = event.pageY - container.offsetTop;
      const scrolling = (element - this.dragScrollY) * sensitivity;
      container.scrollTop = this.dragScrollTop - scrolling;
    } else {
      const element = event.pageX - container.offsetLeft;
      const scrolling = (element - this.dragScrollX) * sensitivity;
      container.scrollLeft = this.dragScrollLeft - scrolling;
    }
  }
  private addListeners() {
    this.scrollListenerInstance = this.onScroll.bind(this);
    this.resizeListenerInstance = this.onResize.bind(this);
    this.container.addEventListener('scroll', this.scrollListenerInstance, { passive: true });
    window.addEventListener('resize', this.resizeListenerInstance);

    if (this.options.drag) {
      this.mouseDownListenerInstance = this.onMouseDown.bind(this);
      this.mouseUpListenerInstance = this.onMouseUp.bind(this);
      this.mouseMoveListenerInstance = this.onMouseMove.bind(this);
      this.mouseLeaveListenerInstance = this.onMouseLeave.bind(this);

      this.container.addEventListener('mousedown', this.mouseDownListenerInstance, { passive: false });
      this.container.addEventListener('mouseup', this.mouseUpListenerInstance, { passive: true });
      this.container.addEventListener('mousemove', this.mouseMoveListenerInstance, { passive: false });
      this.container.addEventListener('mouseleave', this.mouseLeaveListenerInstance, { passive: true });
    }
  }

  private removeListeners() {
    this.container.removeEventListener('scroll', this.scrollListenerInstance);
    window.removeEventListener('resize', this.resizeListenerInstance);

    if (!this.options.drag) {
      this.container.removeEventListener('mousedown', this.mouseDownListenerInstance);
      this.container.removeEventListener('mouseup', this.mouseUpListenerInstance);
      this.container.removeEventListener('mousemove', this.mouseMoveListenerInstance);
      this.container.removeEventListener('mouseleave', this.mouseLeaveListenerInstance);
    }
  }

  private children() {
    return this.container.children;
  }

  private scrollTo({ left, top }: { left?: number; top?: number }): void {
    const behavior = this.options.reduceMotion ? 'auto' : 'smooth';
    this.container.scrollTo({ left, top, behavior });
  }

  private onScroll(): void {
    const container = this.container;
    if (!container) return;

    clearTimeout(this.debounceId);
    this.debounceId = setTimeout(this.onScrollHandler.bind(this), 50);
  }

  private onResize(): void {
    const container = this.container;
    if (!container) return;

    this.refresh((data) => this.options.onScroll?.(data));
  }

  private onScrollHandler() {
    this.refresh((data) => this.options.onScroll?.(data));
  }

  private calculate(): VsfScrollableCallbackData {
    const { container, options } = this;

    function hasNext() {
      if (options.vertical) {
        return container.scrollHeight > Math.ceil(container.scrollTop) + container.clientHeight;
      }
      return container.scrollWidth > Math.ceil(container.scrollLeft) + container.clientWidth;
    }

    function hasPrev() {
      if (options.vertical) {
        return !!container.scrollTop;
      }
      return !!container.scrollLeft;
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
