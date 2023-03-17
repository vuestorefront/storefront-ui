import classNames from 'classnames';
import { forwardRef, useId } from 'react';
import { VsfChipProps, VsfChipSize } from '@storefront-ui/react';

const getSizeClasses = (size: VsfChipProps['size'], square: VsfChipProps['square']) => {
  switch (size) {
    case VsfChipSize.sm:
      return square ? 'text-sm p-1.5' : 'text-sm py-1.5 px-3 min-w-[3rem]';
    default:
      return square ? 'text-base p-2' : 'text-base h-10 py-2 px-4 min-w-[3rem]';
  }
};

const VsfChip = forwardRef<HTMLInputElement, VsfChipProps>(
  ({ children, size = VsfChipSize.base, className, inputProps, square = false, ...attributes }: VsfChipProps, ref) => {
    const chipId = useId();
    // TODO: [last-check: 09-03-2023] reimplement when has() has support https://caniuse.com/css-has
    return (
      <>
        <input
          id={chipId}
          ref={ref}
          className="peer appearance-none outline-none absolute w-0 hidden"
          type="checkbox"
          {...inputProps}
        />
        <label
          htmlFor={chipId}
          className={classNames(
            'cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline',
            getSizeClasses(size, square),
            className,
          )}
          data-testid="chip"
          {...attributes}
        >
          {children}
        </label>
      </>
    );
  },
);

export default VsfChip;
