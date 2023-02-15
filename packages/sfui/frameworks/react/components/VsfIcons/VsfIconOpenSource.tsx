import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconOpenSource({
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
      data-testid="open-source"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M12 2C5.913 2 1 6.913 1 13c0 3.887 1.98 7.407 5.28 9.46.073.073.22.073.293.073.074 0 .147-.073.22-.146l3.447-5.647a.387.387 0 0 0-.147-.513c-1.1-.66-1.76-1.834-1.76-3.154A3.631 3.631 0 0 1 12 9.407a3.631 3.631 0 0 1 3.667 3.666c0 1.394-.807 2.64-1.98 3.3l-.22.22c0 .074 0 .22.073.294l3.447 5.646c.073.147.22.147.293.147.073 0 .147 0 .147-.073C20.873 20.627 23 16.96 23 13.073 23 6.987 18.087 2 12 2Z" />
    </VsfIconBase>
  );
}
