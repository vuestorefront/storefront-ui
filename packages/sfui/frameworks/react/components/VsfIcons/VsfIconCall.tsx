import type { VsfIconProps } from '@storefront-ui/react';
import { VsfIconBase, VsfIconSize } from '@storefront-ui/react';

export default function VsfIconCall({ size = VsfIconSize.base, viewBox = '0 0 24 24', ...attributes }: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="call">
      <path d="M19.95 21c-2.15 0-4.246-.48-6.287-1.438a19.045 19.045 0 0 1-5.425-3.8 19.045 19.045 0 0 1-3.8-5.425C3.479 8.296 3 6.2 3 4.05c0-.3.1-.55.3-.75.2-.2.45-.3.75-.3H8.1a.96.96 0 0 1 .625.225.88.88 0 0 1 .325.575l.65 3.5c.033.233.03.446-.012.637a1.027 1.027 0 0 1-.288.513L6.975 10.9a16.4 16.4 0 0 0 2.638 3.375A18.626 18.626 0 0 0 13.1 17l2.35-2.35a1.4 1.4 0 0 1 .588-.338c.241-.075.479-.095.712-.062l3.45.7c.233.05.425.162.575.337.15.175.225.38.225.613v4.05c0 .3-.1.55-.3.75-.2.2-.45.3-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025c.083.683.2 1.358.35 2.025.15.667.367 1.325.65 1.975ZM19 18.95v-2.2l-2.35-.475-1.675 1.675c.65.283 1.313.508 1.988.675.675.167 1.354.275 2.037.325Z" />
    </VsfIconBase>
  );
}
