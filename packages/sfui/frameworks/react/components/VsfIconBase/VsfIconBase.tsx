import type { VsfIconBaseProps } from './types';
import { VsfIconSizeEnum } from './types';

export default function VsfIconBase({
  size = VsfIconSizeEnum.base,
  className,
  viewBox,
  ariaLabel,
  children = '',
  ...attributes
}: VsfIconBaseProps) {
  return (
    <svg
      {...attributes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={`vsf-icon vsf-icon-${size} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </svg>
  );
}
