import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconSort({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="sort" {...attributes}>
      <path d="M4 18a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2H4ZM3 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 6a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H4Z" />
    </SfIconBase>
  );
}
