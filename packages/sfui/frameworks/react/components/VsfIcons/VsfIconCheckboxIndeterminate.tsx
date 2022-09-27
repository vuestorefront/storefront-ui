
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconCheckboxIndeterminate({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'checkbox-indeterminate'
}: VsfIconProps) {
    return <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
        <><path fillRule='evenodd' clipRule='evenodd' d='M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm14 7a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1Z'/></>
    </VsfIconBase>;
}