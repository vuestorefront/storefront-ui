import classNames from 'classnames';
import type { VsfCounterProps } from './types';
import { VsfCounterSize } from './types';

export default function VsfCounter({
  size = VsfCounterSize.base,
  pill = false,
  children,
  className,
  ...attributes
}: VsfCounterProps): JSX.Element {
  const sizeClasses: Record<VsfCounterSize, string> = {
    [VsfCounterSize.xs]: classNames('text-3xs', { 'px-1': pill }),
    [VsfCounterSize.sm]: classNames('text-2xs', { 'px-1': pill }),
    [VsfCounterSize.base]: classNames('text-xs', { 'px-2': pill }),
    [VsfCounterSize.lg]: classNames('text-sm', { 'px-2.5': pill }),
    [VsfCounterSize.xl]: classNames('text-base', { 'px-3': pill }),
    [VsfCounterSize['2xl']]: classNames('text-lg', { 'px-3': pill }),
  };

  const classes = classNames([
    "inline-flex items-center font-body before:content-['('] after:content-[')'] text-gray-500",
    sizeClasses[size],
    {
      'rounded-full py-0.5 text-gray-900 font-medium ring-1 ring-gray-200 ring-inset before:content-none after:content-none':
        pill,
    },
    className,
  ]);

  return (
    <span className={classes} data-testid="counter" {...attributes}>
      {children}
    </span>
  );
}
