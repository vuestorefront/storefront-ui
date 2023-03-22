import type { SfIconBaseProps } from '@storefront-ui/react';
import { SfIconSize } from '@storefront-ui/react';

const getSizeClasses = (size: SfIconBaseProps['size']) => {
  switch (size) {
    case SfIconSize.xs:
      return 'w-4 h-4';
    case SfIconSize.sm:
      return 'w-5 h-5';
    case SfIconSize.lg:
      return 'w-8 h-8';
    case SfIconSize.xl:
      return 'w-10 h-10';
    case SfIconSize['2xl']:
      return 'w-14 h-14';
    case SfIconSize['3xl']:
      return 'w-24 h-24';
    case SfIconSize['4xl']:
      return 'w-48 h-48';
    default:
      return 'w-6 h-6';
  }
};

export default function SfIconBase({
  size = SfIconSize.base,
  className,
  children = '',
  ...attributes
}: SfIconBaseProps) {
  return (
    <svg
      {...attributes}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block fill-current ${getSizeClasses(size)} ${className}`}
    >
      {children}
    </svg>
  );
}
