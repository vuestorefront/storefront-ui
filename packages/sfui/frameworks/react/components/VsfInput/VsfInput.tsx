import classNames from 'classnames';
import { forwardRef } from 'react';
import { VsfInputSize } from '@storefront-ui/react';
import type { VsfInputProps } from '@storefront-ui/react';

const sizeClasses = {
  [VsfInputSize.sm]: 'py-1.5 px-4',
  [VsfInputSize.base]: 'py-2 px-4',
  [VsfInputSize.lg]: 'py-3 px-4',
};

const VsfInput = forwardRef<HTMLInputElement, VsfInputProps>(
  ({ size = VsfInputSize.base, slotPrefix, slotSuffix, invalid, className, wrapperClassName, ...attributes }, ref) => (
    <div
      className={classNames([
        'flex items-center bg-white rounded-md ring-inset text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
        sizeClasses[size],
        invalid ? 'ring-2 ring-negative-700' : 'ring-1 ring-neutral-200',
        wrapperClassName,
      ])}
      data-testid="input"
    >
      {slotPrefix}
      <input
        className={classNames([
          'appearance-none outline-none min-w-[80px] w-full text-base text-neutral-700 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent read-only:text-disabled-900',
          className,
        ])}
        type="text"
        data-testid="input-field"
        ref={ref}
        {...attributes}
      />
      {slotSuffix}
    </div>
  ),
);

export default VsfInput;
