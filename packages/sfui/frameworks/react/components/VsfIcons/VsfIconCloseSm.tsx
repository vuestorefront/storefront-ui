import type { VsfIconProps } from '@storefront-ui/react';
import { VsfIconBase, VsfIconSize } from '@storefront-ui/react';

export default function VsfIconCloseSm({
  size = VsfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="close-sm">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.615 8.564a.974.974 0 0 0-1.378-1.378L11.9 10.522 8.563 7.186a.974.974 0 1 0-1.378 1.378l3.337 3.336-3.337 3.337a.974.974 0 1 0 1.378 1.378l3.337-3.337 3.336 3.337a.974.974 0 1 0 1.379-1.378L13.278 11.9l3.337-3.336Z"
      />
    </VsfIconBase>
  );
}
