import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconHome({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="home" {...attributes}>
      <path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm0 2c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 19v-9c0-.317.071-.617.213-.9a1.91 1.91 0 0 1 .587-.7l6-4.5a2.11 2.11 0 0 1 .575-.3c.2-.067.408-.1.625-.1.217 0 .425.033.625.1s.392.167.575.3l6 4.5A1.99 1.99 0 0 1 20 10v9a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 18 21h-5v-6h-2v6z" />
    </SfIconBase>
  );
}
