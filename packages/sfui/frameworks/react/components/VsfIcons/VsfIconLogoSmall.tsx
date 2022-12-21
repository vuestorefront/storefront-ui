import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconLogoSmall({
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
      <path d="M17.797 1.346c-.353.222-.699.572-1.391 1.272-.693.7-1.039 1.051-1.258 1.408a3.69 3.69 0 0 0 0 3.858c.22.357.565.707 1.257 1.407.693.701 1.04 1.051 1.392 1.274a3.576 3.576 0 0 0 3.814 0c.353-.223.7-.573 1.392-1.273s1.038-1.05 1.258-1.408a3.69 3.69 0 0 0 0-3.858c-.22-.357-.566-.707-1.258-1.408-.693-.7-1.039-1.05-1.392-1.272a3.576 3.576 0 0 0-3.814 0Zm4.555 21.913 8.057-8.15a3.558 3.558 0 0 1 5.084 0l4.048 4.095-19.77 20L0 19.204l4.091-4.138a3.558 3.558 0 0 1 5.08 0l8.1 8.193c.334.338.73.605 1.166.788a3.555 3.555 0 0 0 2.75 0 3.59 3.59 0 0 0 1.165-.788Z" />
    </VsfIconBase>
  );
}
