import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSizeEnum } from '../VsfIconBase';

export default function VsfIconArrowUp({
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
      data-testid="arrow-up"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <>
        <path d="M5.706 8.295a.998.998 0 0 0 1.41 1.411L11 5.83V21a1 1 0 1 0 2 0V5.83l3.88 3.88a1 1 0 0 0 1.415-1.415l-5.588-5.588a1 1 0 0 0-1.414 0L5.706 8.295Z" />
        <path d="M5.706 8.295a.998.998 0 0 0 1.41 1.411L11 5.83V21a1 1 0 1 0 2 0V5.83l3.88 3.88a1 1 0 0 0 1.415-1.415l-5.588-5.588a1 1 0 0 0-1.414 0L5.706 8.295Z" />
      </>
    </VsfIconBase>
  );
}
