'use client';
import { SfTextareaSize, twMerge, useFocusVisible } from '@storefront-ui/react';
import React, { forwardRef } from 'react';
import type { SfTextareaProps } from './types';

const sizeClasses = {
  [SfTextareaSize.sm]: 'h-[56px] py-[6px] pl-4 pr-3',
  [SfTextareaSize.base]: 'h-[64px] py-2 pl-4 pr-3',
  [SfTextareaSize.lg]: 'h-[72px], p-3 pl-4',
};

export default forwardRef<HTMLTextAreaElement, SfTextareaProps>(
  ({ size = SfTextareaSize.base, invalid = false, className, ...attributes }, ref): React.JSX.Element => {
    const { isFocusVisible } = useFocusVisible({ isTextInput: true });

    return (
      <textarea
        ref={ref}
        className={twMerge(
          'px-4 bg-white rounded-xl text-neutral-900 ring-inset hover:ring-primary-800 focus:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 outline-hidden',
          {
            'ring-2 ring-negative-700': invalid,
            'ring-1 ring-neutral-300': !invalid,
            'focus:outline focus:outline-offset': isFocusVisible,
          },
          sizeClasses[size],
          className,
        )}
        data-testid="textarea"
        {...attributes}
      />
    );
  },
);
