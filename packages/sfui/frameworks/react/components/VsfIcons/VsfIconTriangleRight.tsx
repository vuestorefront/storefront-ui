import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSizeEnum } from '../VsfIconBase';

export default function VsfIconTriangleRight({
  className = '',
  size = VsfIconSizeEnum.base,
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
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M14.124 10.886a1 1 0 0 1 0 1.519L9.661 16.23a1 1 0 0 1-1.651-.76V7.82a1 1 0 0 1 1.65-.76l4.464 3.826Z" />
    </VsfIconBase>
  );
}
