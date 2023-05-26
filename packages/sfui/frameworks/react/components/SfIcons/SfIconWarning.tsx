
import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconWarning({
    size = SfIconSize.base,
    viewBox = '0 0 24 24',
    ...attributes
}: SfIconProps) {
    return <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="warning"><path fillRule='evenodd' d='M10.258 4.067c.764-1.363 2.725-1.363 3.49 0l7.818 13.95c.748 1.333-.216 2.978-1.744 2.978H4.183c-1.528 0-2.492-1.645-1.745-2.978l7.82-13.95ZM12 8a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm0 7.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z' clipRule='evenodd'/></SfIconBase>;
}