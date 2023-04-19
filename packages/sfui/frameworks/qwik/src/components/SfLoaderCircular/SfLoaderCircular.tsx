import classNames from 'classnames';
import { component$ } from '@builder.io/qwik';
import { SfLoaderSize } from '@storefront-ui/shared';
import { SfLoaderCircularProps } from './types';

const sizeClasses = {
  [SfLoaderSize.xs]: 'h-4 w-4 ring-2',
  [SfLoaderSize.sm]: 'h-5 w-5 ring-2',
  [SfLoaderSize.base]: 'h-6 w-6 ring-2',
  [SfLoaderSize.lg]: 'h-8 w-8 ring-2',
  [SfLoaderSize.xl]: 'h-10 w-10 ring-2',
  [SfLoaderSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [SfLoaderSize['3xl']]: 'h-24 w-24 ring-4',
  [SfLoaderSize['4xl']]: 'h-48 w-48 ring-8',
};

const strokeSizeClass = {
  [SfLoaderSize.xs]: 'stroke-[10px]',
  [SfLoaderSize.sm]: 'stroke-[8px]',
  [SfLoaderSize.base]: 'stroke-[6px]',
  [SfLoaderSize.lg]: 'stroke-[4px]',
  [SfLoaderSize.xl]: 'stroke-[3px]',
  [SfLoaderSize['2xl']]: 'stroke-[3px]',
  [SfLoaderSize['3xl']]: 'stroke-2',
  [SfLoaderSize['4xl']]: 'stroke-2',
};

export const SfLoaderCircular = component$<SfLoaderCircularProps>(
  ({ size = SfLoaderSize.base, ariaLabel = 'loading', class: _class, ...attributes }) => {
    return (
      <svg
        class={`
          inline-block ring-inset ring-neutral-300 text-primary-700 rounded-full animate-spin-slow 
          ${sizeClasses[size]} ${_class}
        `}
        viewBox="25 25 50 50"
        aria-live="polite"
        aria-label={ariaLabel}
        data-testid="loader-circular"
        {...attributes}
      >
        <circle
          class={`
            fill-none stroke-2 stroke-current animate-stroke-loader-circular
            ${strokeSizeClass[size]}
          `}
          cx="50"
          cy="50"
          r="24"
        />
      </svg>
    );
  },
);
