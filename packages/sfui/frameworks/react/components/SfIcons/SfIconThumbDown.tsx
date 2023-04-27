import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconThumbDown({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="thumb-down">
      <path d="M3 16c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3h11v13l-6 5.95c-.25.25-.546.396-.887.437a1.646 1.646 0 0 1-.988-.187 1.58 1.58 0 0 1-.7-.7 1.28 1.28 0 0 1-.1-.925L9.45 16H3Zm12-.85V5H6l-3 7v2h9l-1.35 5.5L15 15.15ZM20 3c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v9c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 20 16h-3v-2h3V5h-3V3h3Z" />
    </SfIconBase>
  );
}
