import classNames from 'classnames';
import { type VsfProgressLinearProps, VsfProgressSize, VsfProgressLinearSize } from './types';

const sizeClasses = {
  [VsfProgressLinearSize.minimal]: 'h-1',
  [VsfProgressSize.xs]: 'h-4',
  [VsfProgressSize.sm]: 'h-5',
  [VsfProgressSize.base]: 'h-6',
  [VsfProgressSize.lg]: 'h-7',
  [VsfProgressSize.xl]: 'h-10',
  [VsfProgressSize['2xl']]: 'h-14',
  [VsfProgressSize['3xl']]: 'h-24',
  [VsfProgressSize['4xl']]: 'h-48',
};

export default function VsfProgressLinear({
  value = 0,
  size = VsfProgressSize.base,
  ariaLabel = 'Progress element',
  className,
  ...attributes
}: VsfProgressLinearProps): JSX.Element {
  return (
    <progress
      data-testid="progress-linear"
      max="100"
      className={classNames(
        'bg-neutral-300 text-primary-700 [&::-webkit-progress-bar]:bg-inherit [&::-webkit-progress-value]:bg-current [&::-webkit-progress-value]:transition-[width] [&::-webkit-progress-value]:ease-in-out [&::-webkit-progress-value]:duration-200 [&::-moz-progress-bar]:bg-current',
        sizeClasses[size],
        className,
      )}
      aria-label={ariaLabel}
      value={value}
      {...attributes}
    />
  );
}
