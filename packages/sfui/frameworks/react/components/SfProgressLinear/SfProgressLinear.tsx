import classNames from 'classnames';
import { SfProgressSize, SfProgressLinearSize } from '@storefront-ui/react';
import type { SfProgressLinearProps } from '@storefront-ui/react';

const sizeClasses = {
  [SfProgressLinearSize.minimal]: 'h-1',
  [SfProgressSize.xs]: 'h-4',
  [SfProgressSize.sm]: 'h-5',
  [SfProgressSize.base]: 'h-6',
  [SfProgressSize.lg]: 'h-7',
  [SfProgressSize.xl]: 'h-10',
  [SfProgressSize['2xl']]: 'h-14',
  [SfProgressSize['3xl']]: 'h-24',
  [SfProgressSize['4xl']]: 'h-48',
};

export default function SfProgressLinear({
  value = 0,
  size = SfProgressSize.base,
  ariaLabel = 'Progress element',
  className,
  ...attributes
}: SfProgressLinearProps): JSX.Element {
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
