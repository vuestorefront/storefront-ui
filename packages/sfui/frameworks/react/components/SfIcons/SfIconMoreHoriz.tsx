import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconMoreHoriz({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="more-horiz">
      <path d="M12 14a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14Zm4-2a2 2 0 1 0 4.001-.001A2 2 0 0 0 16 12Zm-8 0a2 2 0 1 0-4.001.001A2 2 0 0 0 8 12Z" />
    </SfIconBase>
  );
}
