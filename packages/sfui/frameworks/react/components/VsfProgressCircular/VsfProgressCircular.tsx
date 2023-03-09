import classNames from 'classnames';
import { VsfProgressSize, type VsfProgressCircularProps } from './types';

const sizeClasses = {
  [VsfProgressSize.xs]: 'h-4 w-4 ring-2',
  [VsfProgressSize.sm]: 'h-5 w-5 ring-2',
  [VsfProgressSize.base]: 'h-6 w-6 ring-2',
  [VsfProgressSize.lg]: 'h-8 w-8 ring-2',
  [VsfProgressSize.xl]: 'h-10 w-10 ring-2',
  [VsfProgressSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [VsfProgressSize['3xl']]: 'h-24 w-24 ring-4',
  [VsfProgressSize['4xl']]: 'h-48 w-48 ring-8',
};

export default function VsfProgressCircular({
  value = 0,
  size = VsfProgressSize.base,
  ariaLabel = 'Progress element',
  children,
  className,
  ...attributes
}: VsfProgressCircularProps): JSX.Element {
  const strokeDasharray = `${(value / 100) * 151}, 150`;
  return (
    <svg
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-label={ariaLabel}
      className={classNames(
        'inline-block ring-inset ring-neutral-200 text-primary-700 rounded-full transition-[stroke-dasharray] ease-in-out duration-500 text-sm',
        sizeClasses[size],
        className,
      )}
      viewBox="25 25 50 50"
      strokeDasharray={strokeDasharray}
      data-testid="progress"
      {...attributes}
    >
      <circle className="fill-none stroke-2 stroke-current -rotate-90 origin-bottom-right" cx="50" cy="50" r="24" />
      {children}
    </svg>
  );
}
