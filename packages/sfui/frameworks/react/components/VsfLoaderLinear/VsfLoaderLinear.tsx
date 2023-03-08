import classNames from 'classnames';
import { VsfLoaderLinearSize, VsfLoaderSize, type VsfLoaderLinearProps } from './types';

const sizeClasses = {
  [VsfLoaderLinearSize.minimal]: 'h-1',
  [VsfLoaderSize.xs]: 'h-4',
  [VsfLoaderSize.sm]: 'h-5',
  [VsfLoaderSize.base]: 'h-6',
  [VsfLoaderSize.lg]: 'h-7',
  [VsfLoaderSize.xl]: 'h-10',
  [VsfLoaderSize['2xl']]: 'h-14',
  [VsfLoaderSize['3xl']]: 'h-24',
  [VsfLoaderSize['4xl']]: 'h-48',
};

export default function VsfLoaderLinear({
  size = VsfLoaderLinearSize.minimal,
  ariaLabel = 'loading',
  className,
  ...attributes
}: VsfLoaderLinearProps): JSX.Element {
  return (
    <span
      className={classNames(
        'relative inline-block overflow-hidden bg-neutral-200 text-primary-700',
        sizeClasses[size],
        className,
      )}
      aria-live="polite"
      aria-label={ariaLabel}
      data-testid="loader-linear"
      {...attributes}
    >
      <span className="absolute w-2.5 h-full animate-line bg-current" aria-hidden="true" />
    </span>
  );
}
