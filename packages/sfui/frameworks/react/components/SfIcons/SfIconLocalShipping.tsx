import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconLocalShipping({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="local-shipping" {...attributes}>
      <path d="M6 20a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 3 17q-.824 0-1.412-.587A1.93 1.93 0 0 1 1 15V6q0-.824.588-1.412A1.92 1.92 0 0 1 3 4h12q.825 0 1.413.588Q17 5.175 17 6v2h2.5q.25 0 .45.1t.35.3l2.5 3.325a.9.9 0 0 1 .15.275q.05.15.05.325V16q0 .424-.288.712A.97.97 0 0 1 22 17h-1q0 1.25-.875 2.125A2.9 2.9 0 0 1 18 20a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 15 17H9q0 1.25-.875 2.125A2.9 2.9 0 0 1 6 20m0-2a.97.97 0 0 0 .713-.288A.97.97 0 0 0 7 17a.97.97 0 0 0-.287-.712A.97.97 0 0 0 6 16a.97.97 0 0 0-.713.288A.97.97 0 0 0 5 17q0 .424.287.712Q5.575 18 6 18M3 6v9h.8q.425-.45.975-.725A2.7 2.7 0 0 1 6 14q.675 0 1.225.275T8.2 15H15V6zm15 12q.424 0 .712-.288A.97.97 0 0 0 19 17a.97.97 0 0 0-.288-.712A.97.97 0 0 0 18 16a.97.97 0 0 0-.712.288A.97.97 0 0 0 17 17q0 .424.288.712A.97.97 0 0 0 18 18m-1-5h4.25L19 10h-2z" />
    </SfIconBase>
  );
}
