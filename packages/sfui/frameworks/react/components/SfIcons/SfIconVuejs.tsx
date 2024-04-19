import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconVuejs({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="vuejs" {...attributes}>
      <path d="M18.526 2.3H14.75L12 6.65 9.643 2.3H1l11 18.843L23 2.3zM3.736 3.871h2.641L12 13.605l5.618-9.734h2.642L12 18.024z" />
    </SfIconBase>
  );
}
