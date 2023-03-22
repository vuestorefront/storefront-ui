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
    [SfCounterSize.xs]: classNames('text-3xs', { 'px-1': pill }),
    [SfCounterSize.sm]: classNames('text-2xs', { 'px-1': pill }),
    [SfCounterSize.base]: classNames('text-xs', { 'px-2': pill }),
    [SfCounterSize.lg]: classNames('text-sm', { 'px-2.5': pill }),
    [SfCounterSize.xl]: classNames('text-base', { 'px-3': pill }),
    [SfCounterSize['2xl']]: classNames('text-lg', { 'px-3': pill }),
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
