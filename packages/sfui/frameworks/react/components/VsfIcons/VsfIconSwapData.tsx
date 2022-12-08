
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconSwapData({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'swap-data',
    viewBox,
    ...attributes
}: VsfIconProps) {
    return <VsfIconBase {...attributes} className={className} size={size} ariaLabel={ariaLabel} viewBox={viewBox ?? '0 0 24 24'}><><path d='M20.999 5a1 1 0 0 1 1 .998v5.145a1 1 0 1 1-2 0V8.414l-6.436 6.436a1 1 0 0 1-1.414-1.414L18.585 7h-2.73a1 1 0 1 1 0-2H21Zm-9.579 5.993a1 1 0 0 0-1.414-1.414L4 15.586v-2.729a1 1 0 1 0-2 0V18a1 1 0 0 0 1 1h5.143a1 1 0 1 0 0-2h-2.73l6.007-6.007Z'/><path d='M20.999 5a1 1 0 0 1 1 .998v5.145a1 1 0 1 1-2 0V8.414l-6.436 6.436a1 1 0 0 1-1.414-1.414L18.585 7h-2.73a1 1 0 1 1 0-2H21Zm-9.579 5.993a1 1 0 0 0-1.414-1.414L4 15.586v-2.729a1 1 0 1 0-2 0V18a1 1 0 0 0 1 1h5.143a1 1 0 1 0 0-2h-2.73l6.007-6.007Z'/></></VsfIconBase>;
}