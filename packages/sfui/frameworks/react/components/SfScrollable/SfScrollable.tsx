import { useMemo } from 'react';
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
      buttonsPlacement = SfScrollableButtonsPlacement.blocked,
      activeIndex,
      reduceMotion,
      drag,
      onDragChange,
      onScroll,
      onPrev,
      onNext,
      className,
      wrapperClassNames,
      style,
      children,
      slotPreviousButton,
      slotNextButton,
      ...attributes
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    const { getContainerProps, state, getNextButtonProps, getPrevButtonProps } = useScrollable(sliderOptions);

    const changeDisabledClass = (isDisabled: boolean) =>
      isDisabled ? '!ring-gray-200 !text-disabled-500' : '!ring-neutral-500 !text-neutral-500';
    const previousButton = (...buttonClassName: Parameters<typeof classNames>) =>
      (slotPreviousButton && <div {...getPrevButtonProps()}>{slotPreviousButton}</div>) || (
        <SfButton
          variant="secondary"
          size="lg"
          className={classNames(buttonClassName, changeDisabledClass(getPrevButtonProps().disabled))}
          square
          slotPrefix={<SfIconChevronLeft />}
          {...getPrevButtonProps()}
        />
      );

    const nextButton = (...buttonClassName: Parameters<typeof classNames>) =>
      (slotNextButton && <div {...getNextButtonProps()}>{slotNextButton}</div>) || (
        <SfButton
          variant="secondary"
          size="lg"
          square
          className={classNames(buttonClassName, changeDisabledClass(getNextButtonProps().disabled))}
          slotPrefix={<SfIconChevronRight />}
          {...getNextButtonProps()}
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
        {buttonsPlacement === SfScrollableButtonsPlacement.blocked &&
          previousButton('!rounded-full bg-white', isHorizontal ? 'mr-4' : 'mb-4 rotate-90')}
        <Tag
          {...getContainerProps({
            className: classNames(className, 'motion-safe:scroll-smooth', {
              'overflow-x-auto flex gap-4': isHorizontal,
              'overflow-y-auto flex flex-col gap-4': !isHorizontal,
              'cursor-grab': state.isDragged,
            }),
          })}
          {...attributes}
        >
          {buttonsPlacement === SfScrollableButtonsPlacement.floating &&
            previousButton('absolute !rounded-full bg-white', isHorizontal ? 'left-4' : 'top-4 rotate-90')}
          {children}
          {buttonsPlacement === SfScrollableButtonsPlacement.floating &&
            nextButton('absolute !rounded-full bg-white', isHorizontal ? 'right-4' : 'bottom-4 rotate-90')}
        </Tag>
        {buttonsPlacement === SfScrollableButtonsPlacement.blocked &&
          nextButton('!rounded-full bg-white', isHorizontal ? 'ml-4' : 'mt-4 rotate-90')}
      </div>
    );
  },
);

export default SfScrollable;
