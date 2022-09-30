import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconPlus({ className = '', size = VsfIconSizeEnum.base, ariaLabel = 'plus' }: VsfIconProps) {
  return (
    <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
      <>
        <path d="M11 11V5a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6Z" />
        <path d="M11 11V5a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6Z" />
      </>
    </VsfIconBase>
  );
}
