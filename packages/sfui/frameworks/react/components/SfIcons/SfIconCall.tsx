import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconCall({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="call" {...attributes}>
      <path d="M19.95 21q-3.225 0-6.287-1.438a19 19 0 0 1-5.425-3.8 19 19 0 0 1-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1a.96.96 0 0 1 .625.225.88.88 0 0 1 .325.575l.65 3.5q.05.35-.012.637a1.03 1.03 0 0 1-.288.513L6.975 10.9q1.05 1.8 2.638 3.375A18.6 18.6 0 0 0 13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.024.35 2.025T6.025 9M19 18.95v-2.2l-2.35-.475-1.675 1.675q.975.424 1.988.675 1.012.25 2.037.325" />
    </SfIconBase>
  );
}
