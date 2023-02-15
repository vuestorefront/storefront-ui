import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconShoppingCartRemove({
  className = '',
  size = VsfIconSize.base,
  ariaLabel,
  viewBox,
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase
      {...attributes}
      className={className}
      size={size}
      ariaLabel={ariaLabel}
      data-testid="shopping-cart-remove"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <>
        <path d="M2 2a1 1 0 0 0 0 2h2.307a.5.5 0 0 1 .487.388l2.463 10.674A2.5 2.5 0 0 0 9.693 17h8.136a2.5 2.5 0 0 0 2.425-1.894l2.216-8.863a1 1 0 1 0-1.94-.486l-2.216 8.864a.5.5 0 0 1-.485.379H9.693a.5.5 0 0 1-.487-.388L6.743 3.938A2.5 2.5 0 0 0 4.307 2H2Zm7.7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
        <path d="M10.293 9.682a1 1 0 0 1 0-1.414l2.28-2.28-2.28-2.28a1 1 0 1 1 1.414-1.415l2.28 2.28 2.281-2.28a1 1 0 1 1 1.414 1.414l-2.28 2.28 2.28 2.281a1 1 0 0 1-1.414 1.414l-2.28-2.28-2.28 2.28a1 1 0 0 1-1.415 0Z" />
      </>
    </VsfIconBase>
  );
}
