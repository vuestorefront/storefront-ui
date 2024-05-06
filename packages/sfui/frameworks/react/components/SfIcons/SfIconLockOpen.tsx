import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconLockOpen({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="lock-open" {...attributes}>
      <path d="M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.413A1.93 1.93 0 0 1 6 8h9V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3a2.87 2.87 0 0 0-1.812.612A3 3 0 0 0 9.125 5.15q-.125.375-.387.612A.9.9 0 0 1 8.125 6q-.5 0-.8-.338a.81.81 0 0 1-.2-.762Q7.5 3.225 8.85 2.112T12 1q2.075 0 3.538 1.462Q17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10v10q0 .825-.587 1.413A1.93 1.93 0 0 1 18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587Q14 15.825 14 15t-.587-1.413A1.93 1.93 0 0 0 12 13q-.825 0-1.412.587A1.93 1.93 0 0 0 10 15q0 .825.588 1.413Q11.175 17 12 17" />
    </SfIconBase>
  );
}
