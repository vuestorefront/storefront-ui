import type { VsfIconProps } from '@storefront-ui/react';
import { VsfIconBase, VsfIconSize } from '@storefront-ui/react';

export default function VsfIconOpenInNew({
  size = VsfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="open-in-new">
      <path d="M19 19H5V5h6a1 1 0 1 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-6a1 1 0 1 0-2 0v6ZM15 3a1 1 0 1 0 0 2h2.59l-9.125 9.125a.997.997 0 0 0 1.41 1.41L19 6.41V9a1 1 0 1 0 2 0V3h-6Z" />
    </VsfIconBase>
  );
}
