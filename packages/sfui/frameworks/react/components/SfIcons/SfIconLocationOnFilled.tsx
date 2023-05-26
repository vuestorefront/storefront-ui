
import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconLocationOnFilled({
    size = SfIconSize.base,
    viewBox = '0 0 24 24',
    ...attributes
}: SfIconProps) {
    return <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="location-on-filled"><path fillRule='evenodd' d='M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2Zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z' clipRule='evenodd'/></SfIconBase>;
}