import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconChevronLeft({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="chevron-left">
      <path d="M14.706 17.297a.998.998 0 0 0 0-1.41l-3.876-3.885 3.877-3.885a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.997.997 0 0 0 1.41 0Z" />
    </SfIconBase>
  );
}
