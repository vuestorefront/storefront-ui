import { useRef, useEffect, useState } from 'react';
import {
  mergeRefs,
  SfIconCheckBox,
  SfIconCheckBoxOutlineBlank,
  SfIconIndeterminateCheckBox,
  polymorphicForwardRef,
  type SfCheckboxProps,
  twMerge,
} from '@storefront-ui/react';

const defaultWrapperTag = 'label';

const SfCheckbox = polymorphicForwardRef<'input', SfCheckboxProps>(
  (
    { wrapperAs, invalid, className, indeterminate: indeterminateProp, wrapperClassName, ...attributes },
    ref,
  ): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    const WrapperTag = wrapperAs || defaultWrapperTag;
    const [isIndeterminate, setIsIndeterminate] = useState(indeterminateProp || false);
    const [isChecked, setIsChecked] = useState(attributes.checked || false);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminateProp || false;
        setIsIndeterminate(indeterminateProp || false);
        setIsChecked(inputRef.current.checked);
      }
    }, [indeterminateProp, attributes.checked]);

    const handleInputChange = () => {
      if (inputRef.current) {
        setIsIndeterminate(inputRef.current.indeterminate);
        setIsChecked(inputRef.current.checked);
      }
    };

    return (
      <WrapperTag
        className={twMerge(
          'flex cursor-pointer focus-visible:outline-primary-700 focus-visible:outline focus-visible:outline-offset-2 rounded-md',
          {
            'text-neutral-500 hover:text-primary-800 active:text-primary-900': !invalid && !attributes.disabled,
            'text-negative-700 hover:text-negative-800 active:text-negative-900': invalid && !attributes.disabled,
            'text-disabled-500 hover:text-disabled-600 active:text-disabled-700': attributes.disabled,
          },
          wrapperClassName,
        )}
        data-testid="checkbox"
      >
        <input
          className={twMerge('hidden', className)}
          type="checkbox"
          ref={mergeRefs([inputRef, ref])}
          {...attributes}
          onChange={(e) => {
            handleInputChange();
            attributes.onChange?.(e);
          }}
        />
        {isIndeterminate ? (
          <SfIconIndeterminateCheckBox />
        ) : isChecked ? (
          <SfIconCheckBox />
        ) : (
          <SfIconCheckBoxOutlineBlank />
        )}
      </WrapperTag>
    );
  },
);

export default SfCheckbox;
