import { useMemo } from 'react';
import classNames from 'classnames';
import {
  polymorphicForwardRef,
  SfScrollableDirection,
  useScrollable,
  type SfScrollableProps,
} from '@storefront-ui/react';

const defaultScrollableTag = 'div';

const SfScrollable = polymorphicForwardRef<typeof defaultScrollableTag, SfScrollableProps>(
  (
    {
      as,
      direction = SfScrollableDirection.horizontal,
      activeIndex,
      reduceMotion,
      drag,
      onDragChange,
      onScroll,
      onPrev,
      onNext,
      className,
      style,
      children,
      ...attributes
    },
    ref,
  ) => {
    const Tag = as || defaultScrollableTag;

    const sliderOptions = useMemo(
      () => ({
        direction,
        activeIndex,
        reduceMotion,
        drag,
        onDragChange,
        onScroll,
        onPrev,
        onNext,
      }),
      [direction, activeIndex, reduceMotion, drag, onDragChange, onScroll, onPrev, onNext],
    );

    const { getContainerProps, state } = useScrollable(sliderOptions);

    return (
      <Tag
        {...getContainerProps({
          className: classNames(className, 'motion-safe:scroll-smooth', {
            'overflow-x-auto flex gap-4': direction === SfScrollableDirection.horizontal,
            'overflow-y-auto flex flex-col gap-4': direction === SfScrollableDirection.vertical,
            'cursor-grab': state.isDragged,
          }),
        })}
        {...attributes}
      >
        {children}
      </Tag>
    );
  },
);

export default SfScrollable;
