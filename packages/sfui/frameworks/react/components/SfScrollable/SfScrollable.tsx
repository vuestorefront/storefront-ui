/* eslint-disable react/require-default-props */
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
      className,
      wrapperClassName,
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
    const isHorizontal = direction === SfScrollableDirection.horizontal;
    const isBlock = buttonsPlacement === SfScrollableButtonsPlacement.block;
    const isFloating = buttonsPlacement === SfScrollableButtonsPlacement.floating;

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

    const { state, getContainerProps, getNextButtonProps, getPrevButtonProps } = useScrollable(sliderOptions);

    function PreviousButton({ classNameButton }: { classNameButton?: string }) {
      if (slotPreviousButton) {
        return cloneElement(slotPreviousButton, getPrevButtonProps({ disabled: previousDisabled, onClick: onPrev }));
      }
      return (
        <SfButton
          {...getPrevButtonProps({
            square: true,
            variant: 'secondary',
            size: 'lg',
            disabled: previousDisabled,
            slotPrefix: <SfIconChevronLeft />,
            className: classNames(
              'hidden md:block !ring-neutral-500 !text-neutral-500 disabled:!ring-disabled-300 disabled:!text-disabled-500',
              classNameButton,
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
            className: classNames(
              'hidden md:block !ring-neutral-500 !text-neutral-500 disabled:!ring-disabled-300 disabled:!text-disabled-500',
              classNameButton,
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
        {isBlock && (
          <PreviousButton
            classNameButton={classNames('!rounded-full bg-white', {
              'mr-4': isHorizontal,
              'mb-4 rotate-90': !isHorizontal,
            })}
          />
        )}
        <Tag
          {...getContainerProps({
            className: classNames(className, {
              'overflow-x-auto flex gap-4': isHorizontal,
              'overflow-y-auto flex flex-col gap-4': !isHorizontal,
              'cursor-grab': state.isDragged,
            }),
            ...attributes,
            ref,
          })}
        >
          {isFloating && (
            <PreviousButton
              classNameButton={classNames('absolute !rounded-full bg-white z-10', {
                'left-4': isHorizontal,
                'top-4 rotate-90': !isHorizontal,
              })}
            />
          )}
          {children}
          {isFloating && (
            <NextButton
              classNameButton={classNames('absolute !rounded-full bg-white z-10', {
                'right-4': isHorizontal,
                'bottom-4 rotate-90': !isHorizontal,
              })}
            />
          )}
        </Tag>
        {isBlock && (
          <NextButton
            classNameButton={classNames('!rounded-full bg-white', {
              'ml-4': isHorizontal,
              'mt-4 rotate-90': !isHorizontal,
            })}
          />
        )}
      </div>
    );
  },
);

export default SfScrollable;
