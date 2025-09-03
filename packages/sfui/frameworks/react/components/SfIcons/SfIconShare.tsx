import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconShare({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="share" {...attributes}>
      <path d="M18 22a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 15 19q0-.175.025-.363.025-.187.075-.337l-7.05-4.1q-.425.375-.95.588T6 15a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 3 12q0-1.25.875-2.125A2.9 2.9 0 0 1 6 9q.575 0 1.1.213.525.212.95.587l7.05-4.1a2 2 0 0 1-.075-.338A3 3 0 0 1 15 5q0-1.25.875-2.125A2.9 2.9 0 0 1 18 2q1.25 0 2.125.875T21 5t-.875 2.125A2.9 2.9 0 0 1 18 8q-.575 0-1.1-.213a3.3 3.3 0 0 1-.95-.587L8.9 11.3q.05.15.075.337a2.7 2.7 0 0 1 0 .726 2 2 0 0 1-.075.337l7.05 4.1q.425-.375.95-.588T18 16q1.25 0 2.125.875T21 19t-.875 2.125A2.9 2.9 0 0 1 18 22" />
    </SfIconBase>
  );
}
