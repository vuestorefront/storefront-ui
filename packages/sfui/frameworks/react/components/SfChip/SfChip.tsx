import classNames from 'classnames';
import { forwardRef, useId, type ReactNode } from 'react';
import { SfChipProps, SfChipSize } from '@storefront-ui/react';

const paddingForSize = (size: `${SfChipSize}`, square: boolean, slotPrefix: ReactNode, slotSuffix: ReactNode) => {
  switch (size) {
    case SfChipSize.sm:
      return square ? 'px-1.5' : [slotPrefix ? 'pl-1.5' : 'pl-3', slotSuffix ? 'pr-1.5' : 'pr-3'];
    default:
      return square ? 'px-2' : [slotPrefix ? 'pl-2' : 'pl-4', slotSuffix ? 'pr-2' : 'pr-4'];
  }
};

const getSizeClasses = (size: SfChipProps['size']) => {
  switch (size) {
    case SfChipSize.sm:
      return `text-sm py-1.5 gap-1.5`;
    default:
      return 'text-base py-2 gap-2';
  }
};

const SfChip = forwardRef<HTMLInputElement, SfChipProps>(
  (
    {
      children,
      size = SfChipSize.base,
      className,
      inputProps,
      square = false,
      slotPrefix,
      slotSuffix,
      ...attributes
    }: SfChipProps,
    ref,
  ) => {
    const chipId = useId();

    return (
      <>
        <input
          id={chipId}
          ref={ref}
          className="absolute w-0 outline-none appearance-none peer"
          type="checkbox"
          {...inputProps}
        />
        <label
          htmlFor={chipId}
          className={classNames(
            'cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline',
            getSizeClasses(size),
            paddingForSize(size, square, slotPrefix, slotSuffix),
            className,
          )}
          data-testid="chip"
          {...attributes}
        >
          {slotPrefix}
          {children}
          {slotSuffix}
        </label>
      </>
    );
  },
);

export default SfChip;
