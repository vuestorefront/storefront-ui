import { useEffect, useRef, useState } from 'react';
import { type UseScrollableOptions, Scrollable } from '@storefront-ui/react';

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

  const getPrevButtonProps = <TProps>(props?: TProps) => {
    const onClick = () => {
      scrollable.current?.prev();
      // props?.onClick?.();
      // TODO: typing of passed through additional props (for all props getters)
    };
    return {
      onClick,
      ...props,
      disabled: !state.hasPrev,
    };
  };

  const getNextButtonProps = <TProps>(props?: TProps) => {
    const onClick = () => {
      scrollable.current?.next();
      // props?.onClick?.();
    };
    return {
      onClick,
      ...props,
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
