import { cloneElement, useMemo } from 'react';
import classNames from 'classnames';
import {
  polymorphicForwardRef,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  useScrollable,
  SfScrollableDirection,
  SfScrollableButtonsPlacement,
  type SfScrollableProps,
} from '@storefront-ui/react';

const defaultScrollableTag = 'div';

const SfScrollable = polymorphicForwardRef<typeof defaultScrollableTag, SfScrollableProps>(
  (
    {
      as,
      direction = SfScrollableDirection.horizontal,
      buttonsPlacement = SfScrollableButtonsPlacement.block,
      activeIndex,
      reduceMotion,
      drag,
      onDragChange,
      onScroll,
      onPrev,
      onNext,
      isActiveIndexCentered,
      className,
      wrapperClassNames,
      previousDisabled,
      nextDisabled,
      style,
      children,
      slotPreviousButton,
      slotNextButton,
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
        isActiveIndexCentered,
      }),
      [direction, activeIndex, reduceMotion, drag, isActiveIndexCentered, onDragChange, onScroll, onPrev, onNext],
    );

    const { getContainerProps, state, getNextButtonProps, getPrevButtonProps } = useScrollable(sliderOptions);
    const previousButton = (...classNameButton: Parameters<typeof classNames>) =>
      (slotPreviousButton &&
        cloneElement(slotPreviousButton, getPrevButtonProps({ disabled: previousDisabled, onClick: onPrev }))) || (
        <SfButton
          {...getPrevButtonProps({
            variant: 'secondary',
            size: 'lg',
            className: classNames(
              'hidden md:block !ring-neutral-500 !text-neutral-500 disabled:!ring-disabled-300 disabled:!text-disabled-500',
              classNameButton,
            ),
            slotPrefix: <SfIconChevronLeft />,
            disabled: previousDisabled,
          })}
        />
      );

    const nextButton = (...classNameButton: Parameters<typeof classNames>) =>
      (slotNextButton &&
        cloneElement(slotNextButton, getNextButtonProps({ disabled: nextDisabled, onClick: onNext }))) || (
        <SfButton
          {...getNextButtonProps({
            square: true,
            variant: 'secondary',
            size: 'lg',
            disabled: nextDisabled,
            slotPrefix: <SfIconChevronRight />,
            className: classNames(
              'hidden md:block !ring-neutral-500 !text-neutral-500 disabled:!ring-disabled-300 disabled:!text-disabled-500',
              classNameButton,
            ),
          })}
        />
      );

    const isHorizontal = direction === SfScrollableDirection.horizontal;

    return (
      <div
        className={classNames(
          'items-center relative',
          isHorizontal ? 'flex' : 'flex-col h-full inline-flex',
          wrapperClassNames,
        )}
      >
        {buttonsPlacement === SfScrollableButtonsPlacement.block &&
          previousButton('!rounded-full bg-white', isHorizontal ? 'mr-4' : 'mb-4 rotate-90')}
        <Tag
          {...getContainerProps({
            className: classNames(className, 'motion-safe:scroll-smooth', {
              'overflow-x-auto flex gap-4': isHorizontal,
              'overflow-y-auto flex flex-col gap-4': !isHorizontal,
              'cursor-grab': state.isDragged,
            }),
            ...attributes,
            ref,
          })}
        >
          {buttonsPlacement === SfScrollableButtonsPlacement.floating &&
            previousButton('absolute !rounded-full bg-white z-10', isHorizontal ? 'left-4' : 'top-4 rotate-90')}
          {children}
          {buttonsPlacement === SfScrollableButtonsPlacement.floating &&
            nextButton('absolute !rounded-full bg-white z-10', isHorizontal ? 'right-4' : 'bottom-4 rotate-90')}
        </Tag>
        {buttonsPlacement === SfScrollableButtonsPlacement.block &&
          nextButton('!rounded-full bg-white', isHorizontal ? 'ml-4' : 'mt-4 rotate-90')}
      </div>
    );
  },
);

export default SfScrollable;
