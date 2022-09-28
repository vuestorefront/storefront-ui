import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconLogOut({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'log-out',
}: VsfIconProps) {
  return (
    <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
      <>
        <path d="M13 2a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8Z" />
        <path d="M16.38 7.293a1 1 0 0 1 1.414 0l3.913 3.913c.206.206.304.48.292.75V12a1 1 0 0 1-.58.908l-3.625 3.625a1 1 0 0 1-1.414-1.414L18.499 13H9.13a1 1 0 1 1 0-2h9.543L16.38 8.707a1 1 0 0 1 0-1.414Z" />
      </>
    </VsfIconBase>
  );
}
