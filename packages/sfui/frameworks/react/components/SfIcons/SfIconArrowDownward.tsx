import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconArrowDownward({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="arrow-downward" {...attributes}>
      <path d="M12 19.575a1.1 1.1 0 0 1-.375-.063.9.9 0 0 1-.325-.212l-6.6-6.6q-.3-.3-.3-.713 0-.412.3-.712t.7-.3.7.3l4.9 4.9v-11.2q0-.425.288-.7A1 1 0 0 1 12 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 5v11.175l4.9-4.9q.3-.3.7-.3t.7.3.3.712q0 .413-.3.713l-6.6 6.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" />
    </SfIconBase>
  );
}
