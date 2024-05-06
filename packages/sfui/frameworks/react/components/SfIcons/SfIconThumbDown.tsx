import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconThumbDown({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="thumb-down" {...attributes}>
      <path d="M3 16q-.8 0-1.4-.6T1 14v-2q0-.175.05-.375t.1-.375l3-7.05q.225-.5.75-.85T6 3h11v13l-6 5.95q-.375.375-.887.437a1.65 1.65 0 0 1-.988-.187 1.58 1.58 0 0 1-.7-.7q-.225-.45-.1-.925L9.45 16zm12-.85V5H6l-3 7v2h9l-1.35 5.5zM20 3q.825 0 1.413.587Q22 4.175 22 5v9q0 .825-.587 1.412A1.93 1.93 0 0 1 20 16h-3v-2h3V5h-3V3z" />
    </SfIconBase>
  );
}
