import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconArrowLeft({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'arrow-left',
}: VsfIconProps) {
  return (
    <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
      <>
        <path d="M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z" />
        <path d="M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z" />
      </>
    </VsfIconBase>
  );
}
