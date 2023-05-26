
import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconClose({
    size = SfIconSize.base,
    viewBox = '0 0 24 24',
    ...attributes
}: SfIconProps) {
    return <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="close"><path d='M18.295 5.705a.998.998 0 0 1 0 1.41L13.41 12l4.885 4.885a.997.997 0 1 1-1.41 1.41L12 13.41l-4.885 4.885a.997.997 0 1 1-1.41-1.41L10.59 12 5.705 7.115a.997.997 0 0 1 1.41-1.41L12 10.59l4.885-4.885a.997.997 0 0 1 1.41 0Z'/></SfIconBase>;
}