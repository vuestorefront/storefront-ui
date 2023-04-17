import { Slot, component$ } from '@builder.io/qwik';
import { SfCounterProps, SfCounterSize } from './types';

export const SfCounter = component$<SfCounterProps>(
  ({ size = SfCounterSize.base, pill = false, class: _class, ...attributes }) => {
    const sizeClasses: Record<SfCounterSize, string> = {
      [SfCounterSize['3xs']]: `text-3xs ${pill ? 'px-1' : ''}`,
      [SfCounterSize['2xs']]: `text-2xs ${pill ? 'px-1.5' : ''}`,
      [SfCounterSize.xs]: `text-xs ${pill ? 'px-2' : ''}`,
      [SfCounterSize.sm]: `text-sm ${pill ? 'px-2.5' : ''}`,
      [SfCounterSize.base]: `text-base ${pill ? 'px-3' : ''}`,
      [SfCounterSize.lg]: `text-lg ${pill ? 'px-3.5' : ''}`,
    };
    const classes = [
      "inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500",
      sizeClasses[size],
      pill
        ? 'rounded-full py-0.5 font-medium ring-1 ring-neutral-200 ring-inset before:content-none after:content-none'
        : '',
      _class,
    ];
    return (
      <span class={classes} data-testid="counter" {...attributes}>
        <Slot />
      </span>
    );
  },
);
