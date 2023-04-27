import classNames from 'classnames';
import { SfLoaderSize } from '@storefront-ui/react';
import type { SfLoaderCircularProps } from '@storefront-ui/react';

const sizeClasses = {
  [SfLoaderSize.xs]: 'h-4 w-4 ring-2',
  [SfLoaderSize.sm]: 'h-5 w-5 ring-2',
  [SfLoaderSize.base]: 'h-6 w-6 ring-2',
  [SfLoaderSize.lg]: 'h-8 w-8 ring-2',
  [SfLoaderSize.xl]: 'h-10 w-10 ring-2',
  [SfLoaderSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [SfLoaderSize['3xl']]: 'h-24 w-24 ring-4',
  [SfLoaderSize['4xl']]: 'h-48 w-48 ring-8',
};

const strokeSizeClass = {
  [SfLoaderSize.xs]: 'stroke-[10px]',
  [SfLoaderSize.sm]: 'stroke-[8px]',
  [SfLoaderSize.base]: 'stroke-[6px]',
  [SfLoaderSize.lg]: 'stroke-[4px]',
  [SfLoaderSize.xl]: 'stroke-[3px]',
  [SfLoaderSize['2xl']]: 'stroke-[3px]',
  [SfLoaderSize['3xl']]: 'stroke-2',
  [SfLoaderSize['4xl']]: 'stroke-2',
};

export default function SfLoaderCircular({
  size = SfLoaderSize.base,
  ariaLabel = 'loading',
  className,
  ...attributes
}: SfLoaderCircularProps): JSX.Element {
  return (
    <svg
      className={classNames(
        'inline-block ring-inset ring-neutral-300 text-primary-700 rounded-full animate-spin-slow',
        sizeClasses[size],
        className,
      )}
      viewBox="25 25 50 50"
      aria-live="polite"
      aria-label={ariaLabel}
      data-testid="loader-circular"
      {...attributes}
    >
      <circle
        className={classNames(
          'fill-none stroke-2 stroke-current animate-stroke-loader-circular',
          strokeSizeClass[size],
        )}
        cx="50"
        cy="50"
        r="24"
      />
    </svg>
  );
}
