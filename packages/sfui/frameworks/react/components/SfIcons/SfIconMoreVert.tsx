import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconMoreVert({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="more-vert" {...attributes}>
      <path d="M14 12a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 12m-2-4a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 8m0 8a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 16" />
    </SfIconBase>
  );
}
