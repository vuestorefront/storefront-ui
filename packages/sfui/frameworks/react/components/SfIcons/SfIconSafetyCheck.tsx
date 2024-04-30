import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconSafetyCheck({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="safety-check" {...attributes}>
      <path d="M12 16.5q2.075 0 3.538-1.463Q17 13.575 17 11.5t-1.462-3.538Q14.075 6.5 12 6.5T8.463 7.962Q7 9.425 7 11.5t1.463 3.537T12 16.5m1.65-2.65L11.5 11.7V8.5h1v2.8l1.85 1.85zM12 21.5q-3.475-.875-5.737-3.988T4 10.6V4.5l8-3 8 3v6.1q0 3.8-2.262 6.912T12 21.5m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V5.875l-6-2.25-6 2.25V10.6q0 3.025 1.7 5.5t4.3 3.3" />
    </SfIconBase>
  );
}
