import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconHome({ className = '', size = VsfIconSizeEnum.base, ariaLabel = 'home' }: VsfIconProps) {
  return (
    <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.293 2.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1-1.414 1.414L20 12.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.586l-.293.293a1 1 0 0 1-1.414-1.414l9-9ZM6 10.414V20h3v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h3v-9.586l-6-6-6 6ZM13 20v-4h-2v4h2Z"
        />
      </>
    </VsfIconBase>
  );
}
