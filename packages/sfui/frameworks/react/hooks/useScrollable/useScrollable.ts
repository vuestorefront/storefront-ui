import { useEffect, useRef, useState } from 'react';
import { type UseScrollableOptions, Scrollable, composeHandlers, createPropsGetter } from '@storefront-ui/react';

export function useScrollable<TElement extends HTMLElement>({
  activeIndex,
  direction,
  drag,
  reduceMotion,
  onDragChange,
  onScroll,
  onPrev,
  onNext,
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
      onDragChange: (data) => {
        setState((currentState) => ({ ...currentState, isDragged: data.isDragged }));
        onDragChange?.(data);
      },
    });
    const unregister = scrollable.current.register();

    if (activeIndex) scrollable.current.scrollToIndex(activeIndex);

    return unregister;
  }, [containerElement, activeIndex, direction, drag, reduceMotion, onDragChange, onScroll, onPrev, onNext]);

  const getPrevButtonProps = createPropsGetter((props) => {
    const onClick = () => {
      scrollable.current?.prev();
    };
    return {
      ...props,
      onClick: composeHandlers(onClick, props?.onClick),
      disabled: !state.hasPrev,
    };
  });

  const getNextButtonProps = createPropsGetter((props) => {
    const onClick = () => {
      scrollable.current?.next();
    };
    return {
      ...props,
      onClick: composeHandlers(onClick, props?.onClick),
      disabled: !state.hasNext,
    };
  });

  const getContainerProps = createPropsGetter((props) => ({
    ref: containerElement,
    ...props,
  }));

  return {
    getContainerProps,
    getPrevButtonProps,
    getNextButtonProps,
    state,
  };
}
