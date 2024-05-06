import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconHome({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="home" {...attributes}>
      <path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm0 2q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 19v-9q0-.476.213-.9.212-.425.587-.7l6-4.5a2.1 2.1 0 0 1 .575-.3q.3-.1.625-.1t.625.1.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.587 1.413A1.93 1.93 0 0 1 18 21h-5v-6h-2v6z" />
    </SfIconBase>
  );
}
