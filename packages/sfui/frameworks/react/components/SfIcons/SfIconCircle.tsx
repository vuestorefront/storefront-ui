
import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconCircle({
    size = SfIconSize.base,
    viewBox = '0 0 24 24',
    ...attributes
}: SfIconProps) {
    return <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="circle"><path d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z'/></SfIconBase>;
}