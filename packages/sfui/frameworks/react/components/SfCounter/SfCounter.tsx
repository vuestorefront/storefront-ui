import classNames from 'classnames';
import type { SfCounterProps } from '@storefront-ui/react';
import { SfCounterSize } from '@storefront-ui/react';

export default function SfCounter({
  size = SfCounterSize.base,
  pill = false,
  children,
  className,
  ...attributes
}: SfCounterProps): JSX.Element {
  const sizeClasses: Record<SfCounterSize, string> = {
    [SfCounterSize['3xs']]: classNames('text-3xs', { 'px-1': pill }),
    [SfCounterSize['2xs']]: classNames('text-2xs', { 'px-1.5': pill }),
    [SfCounterSize.xs]: classNames('text-xs', { 'px-2': pill }),
    [SfCounterSize.sm]: classNames('text-sm', { 'px-2.5': pill }),
    [SfCounterSize.base]: classNames('text-base', { 'px-3': pill }),
    [SfCounterSize.lg]: classNames('text-lg', { 'px-3.5': pill }),
  };

  const classes = classNames([
    "inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500",
    sizeClasses[size],
    {
      'rounded-full py-0.5 font-medium ring-1 ring-neutral-200 ring-inset before:content-none after:content-none': pill,
    },
    className,
  ]);

  return (
    <span className={classes} data-testid="counter" {...attributes}>
      {children}
    </span>
  );
}
