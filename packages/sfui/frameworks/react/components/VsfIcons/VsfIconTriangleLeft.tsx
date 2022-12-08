
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconTriangleLeft({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'triangle-left',
    viewBox,
    ...attributes
}: VsfIconProps) {
    return <VsfIconBase {...attributes} className={className} size={size} ariaLabel={ariaLabel} viewBox={viewBox ?? '0 0 24 24'}><path d='M8.359 11.059a1 1 0 0 0 0 1.518l4.463 3.826a1 1 0 0 0 1.651-.76v-7.65a1 1 0 0 0-1.65-.76L8.358 11.06Z'/></VsfIconBase>;
}