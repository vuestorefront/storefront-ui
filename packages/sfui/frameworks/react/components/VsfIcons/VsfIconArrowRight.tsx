import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconArrowRight({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'arrow-right',
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
      <>
        <path d="M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z" />
        <path d="M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z" />
      </>
    </VsfIconBase>
  );
}
