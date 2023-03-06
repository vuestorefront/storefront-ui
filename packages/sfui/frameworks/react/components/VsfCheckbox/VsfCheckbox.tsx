import classNames from 'classnames';
import { forwardRef } from 'react';
import { VsfCheckboxProps } from './types';

const VsfCheckbox = forwardRef<HTMLInputElement, VsfCheckboxProps>(
  ({ invalid, className, ...attributes }, ref): JSX.Element => (
    <input
      className={classNames(
        'flex self-center h-[18px] min-w-[18px] border-2 rounded-sm appearance-none cursor-pointer text-gray-500 enabled:hover:border-primary-800 enabled:active:border-primary-900 enabled:hover:checked:text-primary-800 enabled:hover:indeterminate:text-primary-800 enabled:active:checked:text-primary-900 enabled:checked:text-primary-700 enabled:checked:bg-checked-checkbox-current border-current enabled:indeterminate:bg-indeterminate-checkbox-current enabled:indeterminate:text-primary-700 disabled:text-gray-300 hover:text-gray-300 disabled:cursor-not-allowed',
        {
          'border-negative-700 enabled:hover:border-negative-800 enabled:active:border-negative-900': invalid,
        },
        className,
      )}
      type="checkbox"
      ref={ref}
      data-testid="checkbox"
      {...attributes}
    />
  ),
);

export default VsfCheckbox;
