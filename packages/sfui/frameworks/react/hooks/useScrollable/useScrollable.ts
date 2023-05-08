import { type Ref, useEffect, useRef, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';
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
  const containerElement = useRef<TElement>(null);
  const scrollable = useRef<Scrollable | null>(null);
  const [state, setState] = useState({ hasPrev: false, hasNext: false, isDragged: false });

  useEffect(() => {
    const container = containerElement.current;
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
    containerElement,
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

  const getPrevButtonProps = createPropsGetter((userProps) => {
    const handlePrev = () => {
      scrollable.current?.prev();
    };
    return {
      onClick: composeHandlers(handlePrev, userProps?.onClick),
      disabled: userProps.disabled || !state.hasPrev,
    };
  });

  const getNextButtonProps = createPropsGetter((userProps) => {
    const handleNext = () => {
      scrollable.current?.next();
    };
    return {
      onClick: composeHandlers(handleNext, userProps?.onClick),
      disabled: userProps.disabled || !state.hasNext,
    };
  });

  const getContainerProps = createPropsGetter((userProps) => ({
    ref: mergeRefs([containerElement, userProps.ref].filter(Boolean) as Ref<HTMLElement>[]),
  }));

  return {
    getContainerProps,
    getPrevButtonProps,
    getNextButtonProps,
    state,
  };
}
