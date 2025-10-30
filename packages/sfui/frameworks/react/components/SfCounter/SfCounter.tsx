import type { SfCounterProps } from '@storefront-ui/react';
import { SfCounterSize, twMerge } from '@storefront-ui/react';

export default function SfCounter({
  size = SfCounterSize.base,
  pill = false,
  children,
  className,
  ...attributes
}: SfCounterProps): JSX.Element {
  const sizeClasses: Record<SfCounterSize, string> = {
    [SfCounterSize['3xs']]: twMerge('text-3xs', { 'px-1': pill }),
    [SfCounterSize['2xs']]: twMerge('text-2xs', { 'px-1.5': pill }),
    [SfCounterSize.xs]: twMerge('text-xs', { 'px-2': pill }),
    [SfCounterSize.sm]: twMerge('text-sm', { 'px-2.5': pill }),
    [SfCounterSize.base]: twMerge('text-base', { 'px-3': pill }),
    [SfCounterSize.lg]: twMerge('text-lg', { 'px-3.5': pill }),
  };

  const classes = twMerge(
    "inline-flex items-center before:content-['('] after:content-[')']",
    sizeClasses[size],
    {
      'rounded-full py-0.5 font-medium ring-1 ring-neutral-200 ring-inset text-neutral-900 before:content-none after:content-none':
        pill,
      'text-neutral-500': !pill,
    },
    className,
  );

  return (
    <span className={classes} data-testid="counter" {...attributes}>
      {children}
    </span>
  );
}
