import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconVisibility({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="visibility" {...attributes}>
      <path d="M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5t-1.312-3.188Q13.875 7 12 7T8.812 8.312Q7.5 9.625 7.5 11.5t1.312 3.188Q10.125 16 12 16m0-1.8q-1.125 0-1.912-.788A2.6 2.6 0 0 1 9.3 11.5q0-1.125.788-1.913A2.6 2.6 0 0 1 12 8.8q1.125 0 1.913.787.787.788.787 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m0 4.8q-3.475 0-6.35-1.837Q2.775 15.325 1.3 12.2a.8.8 0 0 1-.1-.313 3 3 0 0 1 0-.775.8.8 0 0 1 .1-.312q1.475-3.125 4.35-4.962Q8.525 4 12 4t6.35 1.838T22.7 10.8q.075.124.1.312a3 3 0 0 1 0 .775.8.8 0 0 1-.1.313q-1.474 3.125-4.35 4.963Q15.475 19 12 19" />
    </SfIconBase>
  );
}
