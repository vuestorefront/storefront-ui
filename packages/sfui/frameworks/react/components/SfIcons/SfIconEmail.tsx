import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconEmail({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="email" {...attributes}>
      <path d="M4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zM20 8l-7.475 4.675a1.04 1.04 0 0 1-.525.15 1.04 1.04 0 0 1-.525-.15L4 8v10h16zm-8 3 8-5H4zM4 8.25V6.775 6.8v-.013z" />
    </SfIconBase>
  );
}
