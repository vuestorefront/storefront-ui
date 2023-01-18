import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconTriangleUp({
  className = '',
  size = VsfIconSize.base,
  ariaLabel,
  viewBox,
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase
      {...attributes}
      className={className}
      size={size}
      ariaLabel={ariaLabel}
      data-testid="triangle-up"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M11.069 9.35a1 1 0 0 1 1.518 0l3.826 4.463a1 1 0 0 1-.76 1.65H8.002a1 1 0 0 1-.76-1.65l3.827-4.464Z" />
    </VsfIconBase>
  );
}
