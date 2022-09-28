
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconMinus({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'minus'
}: VsfIconProps) {
    return <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
        <><path fillRule='evenodd' clipRule='evenodd' d='M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z'/><path fillRule='evenodd' clipRule='evenodd' d='M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z'/></>
    </VsfIconBase>;
}