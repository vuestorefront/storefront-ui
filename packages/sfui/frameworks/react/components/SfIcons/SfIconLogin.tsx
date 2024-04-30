import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconLogin({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="login" {...attributes}>
      <path d="M9.325 16.275a1.1 1.1 0 0 1-.275-.738q0-.412.275-.687l1.85-1.85H4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 12q0-.425.288-.713A.97.97 0 0 1 4 11h7.175l-1.85-1.85q-.3-.3-.3-.712 0-.413.3-.713.275-.3.688-.3t.687.275l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375a.9.9 0 0 1-.213.325l-3.6 3.6q-.3.3-.7.275a1 1 0 0 1-.675-.3M13 21a.97.97 0 0 1-.712-.288A.97.97 0 0 1 12 20q0-.424.288-.712A.97.97 0 0 1 13 19h6V5h-6a.97.97 0 0 1-.712-.288A.97.97 0 0 1 12 4q0-.425.288-.713A.97.97 0 0 1 13 3h6q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413A1.93 1.93 0 0 1 19 21z" />
    </SfIconBase>
  );
}
