import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconCancel({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'cancel',
}: VsfIconProps) {
  return (
    <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
      <>
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm4.295 12.885a.997.997 0 1 1-1.41 1.41L12 13.41l-2.885 2.885a.997.997 0 1 1-1.41-1.41L10.59 12 7.705 9.115a.997.997 0 0 1 1.41-1.41L12 10.59l2.885-2.885a.997.997 0 0 1 1.41 1.41L13.41 12l2.885 2.885Z" />
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm4.295 12.885a.997.997 0 1 1-1.41 1.41L12 13.41l-2.885 2.885a.997.997 0 1 1-1.41-1.41L10.59 12 7.705 9.115a.997.997 0 0 1 1.41-1.41L12 10.59l2.885-2.885a.997.997 0 0 1 1.41 1.41L13.41 12l2.885 2.885Z" />
      </>
    </VsfIconBase>
  );
}
