import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconStarHalf({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="star-half" {...attributes}>
      <path d="M12 8.125v7.8l3.15 1.925-.825-3.6 2.775-2.4-3.65-.325zm0 10.15-4.15 2.5a.9.9 0 0 1-.575.15.97.97 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.88.88 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.96.96 0 0 1-.312-.513 1 1 0 0 1 .037-.562 1.1 1.1 0 0 1 .3-.45q.2-.176.55-.225l4.85-.425 1.875-4.45q.125-.3.388-.45t.537-.15.538.15q.262.15.387.45l1.875 4.45 4.85.425q.35.05.55.225t.3.45.038.562a.96.96 0 0 1-.313.513l-3.675 3.175 1.1 4.725a.88.88 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.97.97 0 0 1-.525.2.9.9 0 0 1-.575-.15z" />
    </SfIconBase>
  );
}
