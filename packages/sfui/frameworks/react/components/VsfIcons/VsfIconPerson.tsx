
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconPerson({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'person',
    viewBox,
    ...attributes
}: VsfIconProps) {
    return <VsfIconBase {...attributes} className={className} size={size} ariaLabel={ariaLabel} viewBox={viewBox ?? '0 0 24 24'}><path d='M12.4 12c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5s-2.3 5-5 5Zm0-8c-1.6 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.4-3-3-3Zm7.4 18c-.6 0-1-.4-1-1 0-3.5-2.9-6.4-6.4-6.4C8.9 14.6 6 17.5 6 21c0 .6-.4 1-1 1s-1-.4-1-1c0-4.6 3.8-8.4 8.4-8.4 4.6 0 8.4 3.8 8.4 8.4 0 .6-.5 1-1 1Z'/></VsfIconBase>;
}