import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconMoreHoriz({
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
      data-testid="more-horiz"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M12 14a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14Zm4-2a2 2 0 1 0 4.001-.001A2 2 0 0 0 16 12Zm-8 0a2 2 0 1 0-4.001.001A2 2 0 0 0 8 12Z" />
    </VsfIconBase>
  );
}
