import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconAdd({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="add" {...attributes}>
      <path d="M12 19a.97.97 0 0 1-.712-.288A.97.97 0 0 1 11 18v-5H6a.97.97 0 0 1-.713-.288A.97.97 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h5V6q0-.425.288-.713A.97.97 0 0 1 12 5a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6v5h5q.424 0 .712.287.288.288.288.713 0 .424-.288.712A.97.97 0 0 1 18 13h-5v5q0 .424-.287.712A.97.97 0 0 1 12 19" />
    </SfIconBase>
  );
}
