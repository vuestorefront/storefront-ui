import classNames from 'classnames';
import { VsfLoaderSize } from './types';
import type { VsfLoaderCircularProps } from './types';

const sizeClasses = {
  [VsfLoaderSize.xs]: 'h-4 w-4 ring-2',
  [VsfLoaderSize.sm]: 'h-5 w-5 ring-2',
  [VsfLoaderSize.base]: 'h-6 w-6 ring-2',
  [VsfLoaderSize.lg]: 'h-8 w-8 ring-2',
  [VsfLoaderSize.xl]: 'h-10 w-10 ring-2',
  [VsfLoaderSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [VsfLoaderSize['3xl']]: 'h-24 w-24 ring-4',
  [VsfLoaderSize['4xl']]: 'h-48 w-48 ring-8',
};

export default function VsfLoaderCircular({
  size = VsfLoaderSize.base,
  ariaLabel = 'loading',
  className,
  ...attributes
}: VsfLoaderCircularProps): JSX.Element {
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
      <circle className="fill-none stroke-2 stroke-current animate-stroke-loader-circular" cx="50" cy="50" r="24" />
    </svg>
  );
}
