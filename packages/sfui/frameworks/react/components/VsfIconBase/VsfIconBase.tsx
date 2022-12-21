import type { VsfIconBaseProps } from './types';
import { VsfIconSizeEnum } from './types';

export default function VsfIconBase({
  size = VsfIconSizeEnum.base,
  className,
  viewBox,
  children = '',
  ...attributes
}: VsfIconBaseProps) {
  return (
    <svg
      {...attributes}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={`vsf-icon vsf-icon-${size} ${className}`}
    >
      {children}
    </svg>
  );
}
