/* eslint-disable react/require-default-props */
import { cloneElement, useMemo } from 'react';
import classNames from 'classnames';
import {
  polymorphicForwardRef,
  useScrollable,
  mergeRefs,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
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
      onDragStart,
      onDragEnd,
      onScroll,
      onPrev,
      onNext,
      isActiveIndexCentered,
      className,
      wrapperClassName,
      prevDisabled,
      nextDisabled,
      buttonPrevAriaLabel = 'Previous',
      buttonNextAriaLabel = 'Next',
      style,
      children,
      slotPreviousButton,
      slotNextButton,
      ...attributes
    },
    ref,
  ) => {
    const Tag = as || defaultScrollableTag;
    const isHorizontal = direction === SfScrollableDirection.horizontal;
    const isBlock = buttonsPlacement === SfScrollableButtonsPlacement.block;
    const isFloating = buttonsPlacement === SfScrollableButtonsPlacement.floating;

    const sliderOptions = useMemo(
      () => ({
        direction,
        activeIndex,
        reduceMotion,
        drag,
        onDragStart,
        onDragEnd,
        onScroll,
        onPrev,
        onNext,
        isActiveIndexCentered,
      }),
      [
        direction,
        activeIndex,
        reduceMotion,
        drag,
        isActiveIndexCentered,
        onDragStart,
        onDragEnd,
        onScroll,
        onPrev,
        onNext,
      ],
    );

    const { state, containerRef, getNextButtonProps, getPrevButtonProps } = useScrollable(sliderOptions);

    function PreviousButton({ classNameButton }: { classNameButton?: string }) {
      if (slotPreviousButton) {
        return cloneElement(slotPreviousButton, getPrevButtonProps({ disabled: prevDisabled, onClick: onPrev }));
      }
      return (
        <SfButton
          {...getPrevButtonProps({
            square: true,
            variant: 'secondary',
            size: 'lg',
            disabled: prevDisabled,
            slotPrefix: <SfIconChevronLeft />,
            'aria-label': buttonPrevAriaLabel,
            className: classNames(
              classNameButton,
              isFloating ? 'disabled:hidden' : 'disabled:!ring-disabled-300 disabled:!text-disabled-500',
            ),
          })}
        />
      );
    }

    function NextButton({ classNameButton }: { classNameButton?: string }) {
      if (slotNextButton) {
        return cloneElement(slotNextButton, getNextButtonProps({ disabled: nextDisabled, onClick: onNext }));
      }
      return (
        <SfButton
          {...getNextButtonProps({
            square: true,
            variant: 'secondary',
            size: 'lg',
            disabled: nextDisabled,
            slotPrefix: <SfIconChevronRight />,
            'aria-label': buttonNextAriaLabel,
            className: classNames(
              classNameButton,
              isFloating ? 'disabled:hidden' : 'disabled:!ring-disabled-300 disabled:!text-disabled-500',
            ),
          })}
        />
      );
    }
    return (
      <div
        className={classNames(
          'items-center relative',
          isHorizontal ? 'flex' : 'flex-col h-full inline-flex',
          wrapperClassName,
        )}
      >
        {buttonsPlacement !== SfScrollableButtonsPlacement.none && (
          <PreviousButton
            classNameButton={classNames('!rounded-full bg-white hidden md:block !ring-neutral-500 !text-neutral-500', {
              'mr-4': isBlock && isHorizontal,
              'mb-4 rotate-90': isBlock && !isHorizontal,
              'absolute left-4 z-10': isFloating && isHorizontal,
              'absolute top-4 rotate-90 z-10': isFloating && !isHorizontal,
            })}
          />
        )}
        <Tag
          className={classNames(className, 'motion-safe:scroll-smooth', {
            'overflow-x-auto flex gap-4': isHorizontal,
            'overflow-y-auto flex flex-col gap-4': !isHorizontal,
            'cursor-grab': state.isDragged,
          })}
          ref={mergeRefs([containerRef, ref])}
          {...attributes}
        >
          {children}
        </Tag>
        {buttonsPlacement !== SfScrollableButtonsPlacement.none && (
          <NextButton
            classNameButton={classNames('!rounded-full bg-white hidden md:block !ring-neutral-500 !text-neutral-500', {
              'ml-4': isBlock && isHorizontal,
              'mt-4 rotate-90': isBlock && !isHorizontal,
              'absolute right-4 z-10': isFloating && isHorizontal,
              'absolute bottom-4 rotate-90 z-10': isFloating && !isHorizontal,
            })}
          />
        )}
      </div>
    );
  },
);

export default SfScrollable;
