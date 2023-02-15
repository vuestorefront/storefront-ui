import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconRemove({
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
      data-testid="remove"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M6 13a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h12a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 13H6Z" />
    </VsfIconBase>
  );
}
