import { useEffect, useRef, useState, type Ref } from 'react';
import { type UseScrollableOptions, Scrollable, composeHandlers, createPropsGetter } from '@storefront-ui/react';
import { mergeRefs } from 'react-merge-refs';

export function useScrollable<TElement extends HTMLElement>({
  activeIndex,
  direction,
  drag,
  reduceMotion,
  onDragChange,
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
      onDragChange: (data) => {
        setState((currentState) => ({ ...currentState, isDragged: data.isDragged }));
        onDragChange?.(data);
      },
    });
    const unregister = scrollable.current.register();

    if (activeIndex && isActiveIndexCentered) scrollable.current.scrollToIndex(activeIndex);

    return unregister;
  }, [
    containerElement,
    activeIndex,
    direction,
    drag,
    reduceMotion,
    onDragChange,
    onScroll,
    onPrev,
    onNext,
    isActiveIndexCentered,
  ]);

  const getPrevButtonProps = createPropsGetter((props) => {
    const onClick = () => {
      scrollable.current?.prev();
    };
    return {
      onClick: composeHandlers(onClick, props?.onClick),
      disabled: props.disabled || !state.hasPrev,
    };
  });

  const getNextButtonProps = createPropsGetter((props) => {
    const onClick = () => {
      scrollable.current?.next();
    };
    return {
      onClick: composeHandlers(onClick, props?.onClick),
      disabled: props.disabled || !state.hasNext,
    };
  });

  const getContainerProps = createPropsGetter((props) => ({
    ref: mergeRefs([containerElement, props.ref as Ref<HTMLElement>]),
  }));

  return {
    getContainerProps,
    getPrevButtonProps,
    getNextButtonProps,
    state,
  };
}
