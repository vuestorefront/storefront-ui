import { useEffect, useRef, useState } from 'react';
import { type UseScrollableOptions, Scrollable, composeHandlers } from '@storefront-ui/react';

export function useScrollable<TElement extends HTMLElement>(options?: Partial<UseScrollableOptions>) {
  const containerElement = useRef<TElement>(null);
  const scrollable = useRef<Scrollable | null>(null);
  const [state, setState] = useState({ hasPrev: false, hasNext: false, isDragged: false });

  useEffect(() => {
    const container = containerElement.current;
    if (!container) {
      return () => {};
    }
    scrollable.current = new Scrollable(container, {
      ...options,
      onScroll: (data) => {
        setState((currentState) => ({ ...currentState, hasNext: data.hasNext, hasPrev: data.hasPrev }));
        options?.onScroll?.(data);
      },
      onDragChange: (data) => {
        setState((currentState) => ({ ...currentState, isDragged: data.isDragged }));
        options?.onDragChange?.(data);
      },
    });
    const unregister = scrollable.current.register();

    if (options?.activeIndex) scrollable.current.scrollToIndex(options?.activeIndex);

    return unregister;
  }, [containerElement, options]);

  const getPrevButtonProps = <TProps extends { onClick: () => void }>(props?: TProps) => {
    const onClick = () => {
      scrollable.current?.prev();
    };
    return {
      ...props,
      onClick: composeHandlers(onClick, props?.onClick),
      disabled: !state.hasPrev,
    };
  };

  const getNextButtonProps = <TProps extends { onClick: () => void }>(props?: TProps) => {
    const onClick = () => {
      scrollable.current?.next();
    };
    return {
      ...props,
      onClick: composeHandlers(onClick, props?.onClick),
      disabled: !state.hasNext,
    };
  };

  const getContainerProps = <TProps>(props?: TProps) => ({
    ref: containerElement,
    ...props,
  });

  return {
    getContainerProps,
    getPrevButtonProps,
    getNextButtonProps,
    state,
  };
}
