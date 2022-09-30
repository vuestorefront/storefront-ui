
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconTriangleUp({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'triangle-up'
}: VsfIconProps) {
    return <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24"><path d='M11.069 9.35a1 1 0 0 1 1.518 0l3.826 4.463a1 1 0 0 1-.76 1.65H8.002a1 1 0 0 1-.76-1.65l3.827-4.464Z'/></VsfIconBase>;
}