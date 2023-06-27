import classNames from 'classnames';
import { SfTextareaSize, useFocusVisible } from '@storefront-ui/react';
import type { SfTextareaProps } from './types';

const sizeClasses = {
  [SfTextareaSize.sm]: ' h-[32px]',
  [SfTextareaSize.base]: 'h-[40px]',
  [SfTextareaSize.lg]: 'h-[48px]',
};


export default function SfTextarea({
  size = SfTextareaSize.base,
  invalid = false,
  ...attributes
}: SfTextareaProps): JSX.Element {
  const { isFocusVisible } = useFocusVisible({ isTextInput: true });

  return (
    <textarea name="" id="" className={classNames([
      'flex items-center px-4 bg-white rounded-md text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
      {
        'ring-2 ring-negative-700': invalid,
        'ring-1 ring-neutral-200': !invalid,
        'focus-within:outline focus-within:outline-offset': isFocusVisible,
      },
      sizeClasses[size],
    ])}
    {...attributes}
     />
  );
}
