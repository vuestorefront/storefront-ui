import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconAdd({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="add">
      <path d="M12 19a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 18v-5H6a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h5V6c0-.283.096-.521.288-.713A.967.967 0 0 1 12 5a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6v5h5a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 13h-5v5a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 19Z" />
    </SfIconBase>
  );
}
