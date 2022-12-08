
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconMenu({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'menu',
    viewBox,
    ...attributes
}: VsfIconProps) {
    return <VsfIconBase {...attributes} className={className} size={size} ariaLabel={ariaLabel} viewBox={viewBox ?? '0 0 24 24'}><><path d='M3 17a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Zm0-5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Zm1-6a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Z'/><path d='M3 17a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Zm0-5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Zm1-6a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Z'/></></VsfIconBase>;
}