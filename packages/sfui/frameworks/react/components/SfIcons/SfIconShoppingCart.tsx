import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconShoppingCart({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="shopping-cart" {...attributes}>
      <path d="M7 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 20q0-.824.588-1.413A1.93 1.93 0 0 1 7 18q.824 0 1.412.587Q9 19.176 9 20t-.588 1.413A1.93 1.93 0 0 1 7 22m10 0q-.825 0-1.412-.587A1.93 1.93 0 0 1 15 20q0-.824.588-1.413A1.93 1.93 0 0 1 17 18q.824 0 1.413.587Q19 19.176 19 20t-.587 1.413A1.93 1.93 0 0 1 17 22M6.15 6l2.4 5h7l2.75-5zM7 17q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1.975a.93.93 0 0 1-.7-.288A1 1 0 0 1 1 3q0-.424.288-.712A.97.97 0 0 1 2 2h1.625q.274 0 .525.15.25.15.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4a2.03 2.03 0 0 1-.725.775q-.45.275-1.025.275H8.1L7 15h11.025q.425 0 .7.287.275.288.275.713 0 .424-.288.712A.97.97 0 0 1 18 17z" />
    </SfIconBase>
  );
}
