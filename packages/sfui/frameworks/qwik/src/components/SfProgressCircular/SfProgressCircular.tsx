import { Slot, component$ } from '@builder.io/qwik';
import { SfProgressSize } from '@storefront-ui/shared';
import { SfProgressCircularProps } from './types';

const sizeClasses = {
  [SfProgressSize.xs]: 'h-4 w-4 ring-2',
  [SfProgressSize.sm]: 'h-5 w-5 ring-2',
  [SfProgressSize.base]: 'h-6 w-6 ring-2',
  [SfProgressSize.lg]: 'h-8 w-8 ring-2',
  [SfProgressSize.xl]: 'h-10 w-10 ring-2',
  [SfProgressSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [SfProgressSize['3xl']]: 'h-24 w-24 ring-4',
  [SfProgressSize['4xl']]: 'h-48 w-48 ring-8',
};

const strokeSizeClass = {
  [SfProgressSize.xs]: 'stroke-[10px]',
  [SfProgressSize.sm]: 'stroke-[8px]',
  [SfProgressSize.base]: 'stroke-[6px]',
  [SfProgressSize.lg]: 'stroke-[4px]',
  [SfProgressSize.xl]: 'stroke-[3px]',
  [SfProgressSize['2xl']]: 'stroke-[3px]',
  [SfProgressSize['3xl']]: 'stroke-2',
  [SfProgressSize['4xl']]: 'stroke-2',
};

export const SfProgressCircular = component$<SfProgressCircularProps>(
  ({ value = 0, size = SfProgressSize.base, ariaLabel = 'Progress element', class: _class, ...attributes }) => {
    const strokeDasharray = `${(value / 100) * 151}, 150`;
    return (
      <svg
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={ariaLabel}
        class={`inline-block ring-inset ring-neutral-300 text-primary-700 rounded-full transition-[stroke-dasharray] ease-in-out duration-500 text-sm 
          ${sizeClasses[size]} 
          ${_class}`}
        viewBox="25 25 50 50"
        strokeDasharray={strokeDasharray}
        data-testid="progress"
        {...attributes}
      >
        <circle
          className={`origin-bottom-right -rotate-90 stroke-current fill-none ${strokeSizeClass[size]}`}
          cx="50"
          cy="50"
          r="24"
        />
        <Slot />
      </svg>
    );
  },
);
