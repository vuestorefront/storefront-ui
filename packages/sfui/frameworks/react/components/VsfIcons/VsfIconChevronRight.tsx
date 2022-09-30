
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconChevronRight({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'chevron-right'
}: VsfIconProps) {
    return <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24"><><path d='M8.704 8.115a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.587a.997.997 0 0 1-1.412-1.41L12.58 12 8.704 8.115Z'/><path d='M8.704 8.115a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.587a.997.997 0 0 1-1.412-1.41L12.58 12 8.704 8.115Z'/></></VsfIconBase>;
}