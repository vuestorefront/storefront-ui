import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconViewList({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="view-list" {...attributes}>
      <path d="M3 17V7q0-.824.587-1.412A1.93 1.93 0 0 1 5 5h14q.825 0 1.413.588Q21 6.175 21 7v10q0 .825-.587 1.413A1.93 1.93 0 0 1 19 19H5q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 17m2-8h2V7H5zm4 0h10V7H9zm0 4h10v-2H9zm0 4h10v-2H9zm-4 0h2v-2H5zm0-4h2v-2H5z" />
    </SfIconBase>
  );
}
