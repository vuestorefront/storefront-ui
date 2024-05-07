import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconArrowForward({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="arrow-forward" {...attributes}>
      <path d="M11.3 19.3a1 1 0 0 1-.288-.7.9.9 0 0 1 .263-.7l4.9-4.9H5a.97.97 0 0 1-.713-.288A.97.97 0 0 1 4 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 11h11.175l-4.9-4.9a.9.9 0 0 1-.263-.7 1 1 0 0 1 .288-.7.95.95 0 0 1 .7-.275q.425 0 .7.275l6.6 6.6q.15.125.213.312.062.188.062.388t-.062.375a.9.9 0 0 1-.213.325l-6.6 6.6a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" />
    </SfIconBase>
  );
}
