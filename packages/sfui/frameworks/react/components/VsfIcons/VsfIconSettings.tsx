import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSizeEnum } from '../VsfIconBase';

export default function VsfIconSettings({
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
      data-testid="settings"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="m20.684 10.134-1.055-.374a1.145 1.145 0 0 1-.65-1.572l.48-1.01A1.98 1.98 0 0 0 16.82 4.54l-1.01.48a1.146 1.146 0 0 1-1.571-.65l-.375-1.055a1.98 1.98 0 0 0-3.73 0L9.76 4.37a1.146 1.146 0 0 1-1.571.65l-1.011-.48a1.98 1.98 0 0 0-2.637 2.638l.48 1.01a1.146 1.146 0 0 1-.65 1.572l-1.055.375a1.979 1.979 0 0 0 0 3.73l1.055.374a1.145 1.145 0 0 1 .65 1.571l-.48 1.01a1.98 1.98 0 0 0 2.637 2.638l1.01-.48a1.144 1.144 0 0 1 1.572.651l.375 1.054a1.98 1.98 0 0 0 3.73 0l.375-1.055a1.144 1.144 0 0 1 1.57-.65l1.011.48a1.979 1.979 0 0 0 2.638-2.637l-.48-1.011a1.146 1.146 0 0 1 .65-1.57l1.055-.377a1.98 1.98 0 0 0 0-3.729ZM12 15.986a4.108 4.108 0 0 1-3.701-2.454 4.01 4.01 0 0 1 2.167-5.234 4.057 4.057 0 0 1 5.234 2.167 4.01 4.01 0 0 1-2.167 5.234c-.486.2-1.008.298-1.533.287Z" />
    </VsfIconBase>
  );
}
