import type { VsfIconBaseProps } from './types';
import { VsfIconSize } from './types';

export default function VsfIconBase({
  size = VsfIconSize.base,
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
