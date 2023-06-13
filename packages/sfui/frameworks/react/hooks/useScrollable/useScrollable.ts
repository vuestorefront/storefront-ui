import { useEffect, useRef, useState, useCallback } from 'react';
import { type UseScrollableOptions, Scrollable, composeHandlers, createPropsGetter } from '@storefront-ui/react';

export function useScrollable<TElement extends HTMLElement>({
  activeIndex,
  direction,
  drag,
  reduceMotion,
  onDragStart,
  onDragEnd,
  onScroll,
  onPrev,
  onNext,
  isActiveIndexCentered,
}: Partial<UseScrollableOptions> = {}) {
  const containerRef = useRef<TElement>(null);
  const scrollable = useRef<Scrollable | null>(null);
  const [state, setState] = useState({ hasPrev: false, hasNext: false, isDragged: false });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return () => {};
    }
    scrollable.current = new Scrollable(container, {
      direction,
      drag,
      reduceMotion,
      onPrev,
      onNext,
      onScroll: (data) => {
        setState((currentState) => ({ ...currentState, hasNext: data.hasNext, hasPrev: data.hasPrev }));
        onScroll?.(data);
      },
      onDragStart: (data) => {
        setState((currentState) => ({ ...currentState, isDragged: data.isDragged }));
        onDragStart?.(data);
      },
      onDragEnd,
    });
    const unregister = scrollable.current.register();

    if (typeof activeIndex === 'number' && activeIndex >= 0 && isActiveIndexCentered) {
      scrollable.current.scrollToIndex(activeIndex);
    }

    return unregister;
  }, [
    containerRef,
    activeIndex,
    direction,
    drag,
    reduceMotion,
    onDragStart,
    onDragEnd,
    onScroll,
    onPrev,
    onNext,
    isActiveIndexCentered,
  ]);

  const showPrev = useCallback(() => {
    scrollable.current?.prev();
  }, []);

  const showNext = useCallback(() => {
    scrollable.current?.next();
  }, []);

  const getPrevButtonProps = createPropsGetter((userProps) => ({
    onClick: composeHandlers(showPrev, userProps?.onClick),
    disabled: typeof userProps.disabled !== 'undefined' ? userProps.disabled : !state.hasPrev,
  }));

  const getNextButtonProps = createPropsGetter((userProps) => ({
    onClick: composeHandlers(showNext, userProps?.onClick),
    disabled: typeof userProps.disabled !== 'undefined' ? userProps.disabled : !state.hasNext,
  }));

  return {
    containerRef,
    getPrevButtonProps,
    getNextButtonProps,
    showNext,
    showPrev,
    state,
  };
}
