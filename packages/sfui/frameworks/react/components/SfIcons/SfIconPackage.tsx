import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconPackage({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="package" {...attributes}>
      <path d="m10 9.75 1.325-.65a1.6 1.6 0 0 1 1.35 0L14 9.75V5h-4zM8 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 7 16a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 15h3a.97.97 0 0 1 .713.287A.97.97 0 0 1 12 16q0 .424-.287.712A.97.97 0 0 1 11 17zm-3 4q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 19V5q0-.825.587-1.413A1.93 1.93 0 0 1 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413A1.93 1.93 0 0 1 19 21zm0-2h14V5h-3v6.375q0 .574-.475.862a.95.95 0 0 1-.975.038L12 11l-2.55 1.275a.95.95 0 0 1-.975-.038Q8 11.95 8 11.375V5H5z" />
    </SfIconBase>
  );
}
