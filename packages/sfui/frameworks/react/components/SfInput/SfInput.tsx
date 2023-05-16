import classNames from 'classnames';
import { SfInputSize, useFocusVisible, type SfInputProps, polymorphicForwardRef } from '@storefront-ui/react';

const defaultWrapperTag = 'span';

const sizeClasses = {
  [SfInputSize.sm]: 'py-1.5 px-4',
  [SfInputSize.base]: 'py-2 px-4',
  [SfInputSize.lg]: 'py-3 px-4',
};

const SfInput = polymorphicForwardRef<typeof defaultWrapperTag, SfInputProps>(
  (
    { wrapperAs, size = SfInputSize.base, slotPrefix, slotSuffix, invalid, className, wrapperClassName, ...attributes },
    ref,
  ) => {
    const WrapperTag = wrapperAs || defaultWrapperTag;
    const { isFocusVisible } = useFocusVisible({ isTextInput: true });

    return (
      <WrapperTag
        className={classNames([
          'flex items-center gap-2 bg-white rounded-md ring-inset text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
          {
            'ring-2 ring-negative-700': invalid,
            'ring-1 ring-neutral-200': !invalid,
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
