import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconEmail({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="email" {...attributes}>
      <path d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 20H4ZM20 8l-7.475 4.675a1.04 1.04 0 0 1-.525.15 1.04 1.04 0 0 1-.525-.15L4 8v10h16V8Zm-8 3 8-5H4l8 5ZM4 8.25V6.775 6.8v-.013V8.25Z" />
    </SfIconBase>
  );
}
