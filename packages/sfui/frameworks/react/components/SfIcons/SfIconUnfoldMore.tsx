import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconUnfoldMore({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="unfold-more" {...attributes}>
      <path d="M8.225 8.325Q7.95 8.05 7.95 7.6t.275-.725L11.3 3.8q.15-.15.325-.213.175-.062.375-.062t.388.062a.7.7 0 0 1 .312.213l3.1 3.1q.274.274.262.712t-.287.713-.725.275-.725-.275L12 6 9.65 8.35q-.274.274-.712.263a1 1 0 0 1-.713-.288M12 20.575a.9.9 0 0 1-.375-.075 1.3 1.3 0 0 1-.325-.2l-3.075-3.075q-.275-.275-.275-.725t.275-.725.725-.275.725.275L12 18.1l2.35-2.35q.274-.274.712-.262t.713.287.275.725-.275.725L12.7 20.3a.9.9 0 0 1-.312.2q-.188.075-.388.075" />
    </SfIconBase>
  );
}
