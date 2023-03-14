import type { VsfIconProps } from '@storefront-ui/react';
import { VsfIconBase, VsfIconSize } from '@storefront-ui/react';

export default function VsfIconCircle({ size = VsfIconSize.base, viewBox = '0 0 24 24', ...attributes }: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="circle">
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
    </VsfIconBase>
  );
}
