
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconWarning({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'warning'
}: VsfIconProps) {
    return <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24"><><path d='M12.002 9a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1Zm1.304 7.415a1.306 1.306 0 1 1-2.612 0 1.306 1.306 0 0 1 2.612 0Z'/><path fillRule='evenodd' clipRule='evenodd' d='M10.258 4.067c.764-1.363 2.725-1.363 3.49 0l7.818 13.95c.748 1.333-.216 2.978-1.744 2.978H4.183c-1.528 0-2.492-1.645-1.745-2.978l7.82-13.95Zm9.137 14.928a.25.25 0 0 0 .218-.372L12.22 5.434a.25.25 0 0 0-.436 0L4.392 18.623a.25.25 0 0 0 .218.372h14.785Z'/></></VsfIconBase>;
}