
import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconPinterest({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = 'pinterest'
}: VsfIconProps) {
    return <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24"><path d='M12.175 2C8.063 2 4 4.74 4 9.177c0 2.82 1.587 4.424 2.549 4.424.396 0 .625-1.106.625-1.419 0-.373-.95-1.166-.95-2.717 0-3.221 2.452-5.505 5.626-5.505 2.729 0 4.749 1.55 4.749 4.4 0 2.127-.854 6.118-3.619 6.118-.998 0-1.851-.721-1.851-1.755 0-1.515 1.058-2.981 1.058-4.544 0-2.653-3.763-2.172-3.763 1.034 0 .673.084 1.418.385 2.032-.553 2.38-1.683 5.926-1.683 8.378 0 .758.108 1.503.18 2.26.136.153.068.137.276.06 2.02-2.764 1.948-3.305 2.862-6.924.492.938 1.767 1.443 2.776 1.443 4.256 0 6.167-4.148 6.167-7.886C19.387 4.596 15.95 2 12.175 2Z'/></VsfIconBase>;
}