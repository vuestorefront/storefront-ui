import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconPlayhouseFull({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="playhouse-full" {...attributes}>
      <>
        <rect width="100%" height="100%" fill="#d3d3d3" />
        <text x="50%" y="50%" dominantBaseline="middle" fontFamily="Arial" fontSize="20" textAnchor="middle">
          PlayHouse Full Logo Placeholder
        </text>
      </>
    </SfIconBase>
  );
}
