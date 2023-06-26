import classNames from 'classnames';
import {
  SfInputSize,
  useFocusVisible,
  type SfInputProps,
  polymorphicForwardRef,
  useFormControl,
} from '@storefront-ui/react';

const defaultWrapperTag = 'span';

const sizeClasses = {
  [SfInputSize.sm]: ' h-[32px]',
  [SfInputSize.base]: 'h-[40px]',
  [SfInputSize.lg]: 'h-[48px]',
};

const SfInput = polymorphicForwardRef<typeof defaultWrapperTag, SfInputProps>(
  (
    {
      wrapperAs,
      size = SfInputSize.base,
      slotPrefix,
      slotSuffix,
      invalid,
      className,
      wrapperClassName,
      disabled,
      ...attributes
    },
    ref,
  ) => {
    const WrapperTag = wrapperAs || defaultWrapperTag;
    const { isFocusVisible } = useFocusVisible({ isTextInput: true });
    const formControl = useFormControl();
    const isInvalid = invalid || formControl?.invalid;
    const isDisabled = disabled || formControl?.disabled;

    return (
      <WrapperTag
        className={classNames([
          'flex items-center gap-2 px-4 bg-white rounded-md ring-1 text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
          {
            'ring-2 ring-negative-700': isInvalid,
            'ring-1 ring-neutral-200': !isInvalid,
            'focus-within:outline focus-within:outline-offset': isFocusVisible,
          },
          sizeClasses[size],
          wrapperClassName,
        ])}
        data-testid="input"
      >
        {slotPrefix}
        <input
          className={classNames([
            'min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent',
            className,
          ])}
          type="text"
          data-testid="input-field"
          disabled={isDisabled}
          size={1}
          ref={ref}
          {...attributes}
        />
        {slotSuffix}
      </WrapperTag>
    );
  },
);

export default SfInput;
