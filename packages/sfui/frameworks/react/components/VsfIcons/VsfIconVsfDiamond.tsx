import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSizeEnum } from '../VsfIconBase';

export default function VsfIconVsfDiamond({
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
      <path d="M7.888 2.174c-.761.473-1.508 1.22-3 2.713-1.494 1.493-2.24 2.24-2.714 3a7.788 7.788 0 0 0 0 8.226c.473.76 1.22 1.506 2.712 2.999 1.494 1.494 2.24 2.24 3.002 2.714a7.787 7.787 0 0 0 8.224 0c.761-.474 1.508-1.22 3-2.713 1.494-1.493 2.24-2.24 2.714-3a7.788 7.788 0 0 0 0-8.225c-.474-.761-1.22-1.508-2.713-3-1.493-1.494-2.24-2.24-3-2.714a7.788 7.788 0 0 0-8.225 0Z" />
    </VsfIconBase>
  );
}
