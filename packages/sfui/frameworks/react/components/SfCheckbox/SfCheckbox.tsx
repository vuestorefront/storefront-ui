import classNames from 'classnames';
import { forwardRef, useRef } from 'react';
import {
  mergeRefs,
  SfIconCheckBox,
  SfIconCheckBoxOutlineBlank,
  SfIconIndeterminateCheckBox,
  type SfCheckboxProps,
} from '@storefront-ui/react';

const SfCheckbox = forwardRef<HTMLInputElement, SfCheckboxProps>(
  ({ invalid, labelClass, className, ...attributes }, ref): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
      <label
        className={classNames(
          'flex cursor-pointer focus-visible:outline-primary-700 focus-visible:outline focus-visible:outline-offset-2 rounded-md',
          {
            'text-neutral-500 hover:text-primary-800 active:text-primary-900': !invalid && !attributes.disabled,
            'text-negative-700 hover:text-negative-800 active:text-negative-900': invalid && !attributes.disabled,
            'text-disabled-500 hover:text-disabled-600 active:text-disabled-700': attributes.disabled,
          },
          labelClass,
        )}
      >
        <input
          className={classNames('hidden', className)}
          type="checkbox"
          ref={mergeRefs([inputRef, ref])}
          data-testid="checkbox"
          {...attributes}
        />
        {inputRef.current?.indeterminate ? (
          <SfIconIndeterminateCheckBox />
        ) : inputRef.current?.checked ? (
          <SfIconCheckBox />
        ) : (
          <SfIconCheckBoxOutlineBlank />
        )}
      </label>
    );
  },
);

export default SfCheckbox;
