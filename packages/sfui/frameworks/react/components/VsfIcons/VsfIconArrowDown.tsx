import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconArrowDown({
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
      <>
        <path d="M18.294 15.705a.998.998 0 0 0-1.41-1.411L13 18.17V3a1 1 0 1 0-2 0v15.17l-3.88-3.88a1 1 0 0 0-1.415 1.415l5.588 5.588a1 1 0 0 0 1.414 0l5.587-5.588Z" />
        <path d="M18.294 15.705a.998.998 0 0 0-1.41-1.411L13 18.17V3a1 1 0 1 0-2 0v15.17l-3.88-3.88a1 1 0 0 0-1.415 1.415l5.588 5.588a1 1 0 0 0 1.414 0l5.587-5.588Z" />
      </>
    </VsfIconBase>
  );
}
