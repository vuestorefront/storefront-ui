import type { VsfIconBaseProps } from './types';
import { VsfIconSize } from './types';

const getSizeClasses = (size: VsfIconBaseProps['size']) => {
  switch (size) {
    case VsfIconSize.xs:
      return 'w-4 h-4';
    case VsfIconSize.sm:
      return 'w-5 h-5';
    case VsfIconSize.lg:
      return 'w-8 h-8';
    case VsfIconSize.xl:
      return 'w-10 h-10';
    case VsfIconSize['2xl']:
      return 'w-14 h-14';
    case VsfIconSize['3xl']:
      return 'w-24 h-24';
    case VsfIconSize['4xl']:
      return 'w-48 h-48';
    default:
      return 'w-6 h-6';
  }
};

export default function VsfIconBase({
  size = VsfIconSize.base,
  className,
  children = '',
  ...attributes
}: VsfIconBaseProps) {
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
