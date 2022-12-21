import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconRadioButtonChecked({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel,
  viewBox,
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase
      {...attributes}
      className={className}
      size={size}
      ariaLabel={ariaLabel}
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <>
        <path d="M6 12c0-3.312 2.688-6 6-6s6 2.688 6 6-2.688 6-6 6-6-2.688-6-6Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM4 12c0-4.415 3.585-8 8-8s8 3.585 8 8-3.585 8-8 8-8-3.585-8-8Z"
        />
      </>
    </VsfIconBase>
  );
}
