import { forwardRef } from 'react';
import classNames from 'classnames';
import mergeRefs from 'merge-refs';
import { SfInputSize, useFocusVisible } from '@storefront-ui/react';
import type { SfInputProps } from '@storefront-ui/react';

const sizeClasses = {
  [SfInputSize.sm]: 'py-1.5 px-4',
  [SfInputSize.base]: 'py-2 px-4',
  [SfInputSize.lg]: 'py-3 px-4',
};

const SfInput = forwardRef<HTMLInputElement, SfInputProps>(
  ({ size = SfInputSize.base, slotPrefix, slotSuffix, invalid, className, wrapperClassName, ...attributes }, ref) => {
    const { isFocusVisible } = useFocusVisible({ isTextInput: true });

    return (
      <div
        className={classNames([
          'flex items-center bg-white rounded-md ring-inset text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
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
        {slotPrefix && <span className="pr-2">{slotPrefix}</span>}
        <input
          className={classNames([
            'min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent',
            className,
          ])}
          type="text"
          data-testid="input-field"
          size={1}
          ref={mergeRefs(ref)}
          {...attributes}
        />
        {slotSuffix && <span className="pl-2">{slotSuffix}</span>}
      </div>
    );
  },
);

export default SfInput;
