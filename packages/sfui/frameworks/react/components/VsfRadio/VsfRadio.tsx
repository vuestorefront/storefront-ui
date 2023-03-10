import classNames from 'classnames';
import { forwardRef } from 'react';
import { VsfRadioProps } from './types';

export default forwardRef<HTMLInputElement, VsfRadioProps>((props, ref) => {
  const { invalid, className, disabled, ...attributes } = props;

  return (
    <input
      ref={ref}
      type="radio"
      disabled={disabled}
      className={classNames(
        'min-w-[20px] h-5 border-2 border-neutral-500 rounded-full appearance-none cursor-pointer focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 active:border-primary-900 hover:border-primary-700 checked:bg-primary-700 checked:border-primary-700 checked:shadow-inset hover:checked:bg-primary-800 hover:checked:border-primary-800 active:checked:bg-primary-900 active:checked:border-primary-900 disabled:border-disabled-500 disabled:opacity-40 disabled:cursor-not-allowed disabled:checked:bg-disabled-500 disabled:checked:border-disabled-500',
        {
          '!border-negative-700 hover:!border-negative-800 active:!border-negative-900': invalid && !disabled,
        },
        className,
      )}
      {...attributes}
    />
  );
});
