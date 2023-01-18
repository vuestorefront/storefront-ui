import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconChevronUp({
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
      data-testid="chevron-up"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <>
        <path d="M7.82 15.001a.997.997 0 0 1-1.41-1.411l4.588-4.588a1 1 0 0 1 1.414 0L17 13.59A.998.998 0 0 1 15.59 15l-3.885-3.876L7.82 15Z" />
        <path d="M7.82 15.001a.997.997 0 0 1-1.41-1.411l4.588-4.588a1 1 0 0 1 1.414 0L17 13.59A.998.998 0 0 1 15.59 15l-3.885-3.876L7.82 15Z" />
      </>
    </VsfIconBase>
  );
}
