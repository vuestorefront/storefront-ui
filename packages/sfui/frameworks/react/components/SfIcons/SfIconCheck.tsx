import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconCheck({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="check">
      <path d="M4.535 12.705 8 16.17l9.885-9.875a.997.997 0 0 1 1.41 1.41L8.707 18.293a1 1 0 0 1-1.414 0L3.12 14.12a1 1 0 0 1 1.415-1.415Z" />
    </SfIconBase>
  );
}
