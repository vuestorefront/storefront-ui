import classNames from 'classnames';
import { SfLoaderLinearSize, SfLoaderSize } from '@storefront-ui/react';
import type { SfLoaderLinearProps } from '@storefront-ui/react';

const sizeClasses = {
  [SfLoaderLinearSize.minimal]: 'h-1',
  [SfLoaderSize.xs]: 'h-4',
  [SfLoaderSize.sm]: 'h-5',
  [SfLoaderSize.base]: 'h-6',
  [SfLoaderSize.lg]: 'h-7',
  [SfLoaderSize.xl]: 'h-10',
  [SfLoaderSize['2xl']]: 'h-14',
  [SfLoaderSize['3xl']]: 'h-24',
  [SfLoaderSize['4xl']]: 'h-48',
};

export default function SfLoaderLinear({
  size = SfLoaderSize.base,
  ariaLabel = 'loading',
  className,
  ...attributes
}: SfLoaderLinearProps): JSX.Element {
  return (
    <span
      className={classNames(
        'relative inline-block overflow-hidden bg-neutral-300 text-primary-700 after:absolute after:w-2.5 after:h-full after:animate-line after:bg-current after:block',
        sizeClasses[size],
        className,
      )}
      aria-live="polite"
      aria-label={ariaLabel}
      data-testid="loader-linear"
      {...attributes}
    />
  );
}
