import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconAlokai({ size = SfIconSize.base, viewBox = '0 0 32 32', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="alokai" {...attributes}>
      <path d="m28.2 10.681-3.712-.014c-1.732 0-3.155 1.423-3.17 3.169v4.343a3.16 3.16 0 0 0 3.155 3.154h7.512V32H21.32v-7.512a3.16 3.16 0 0 0-3.155-3.155h-4.343a3.16 3.16 0 0 0-3.154 3.155v6.236c0 .69-.558 1.261-1.262 1.261H1.262c-.69 0-1.262-.557-1.262-1.261V22.58c0-.69.558-1.262 1.262-1.262h6.235a3.16 3.16 0 0 0 3.155-3.155V13.19a2.54 2.54 0 0 1 2.538-2.538h4.974a3.16 3.16 0 0 0 3.155-3.155V3.8a3.8 3.8 0 0 1 3.8-3.8h3.08A3.8 3.8 0 0 1 32 3.8v3.081a3.8 3.8 0 0 1-3.8 3.8M10.681 5.34a5.34 5.34 0 1 1-10.68 0 5.34 5.34 0 0 1 10.68 0" />
    </SfIconBase>
  );
}
