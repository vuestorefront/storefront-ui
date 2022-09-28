import type { VsfIconProps } from '../VsfIcons/types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconCheckboxChecked({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'checkbox-checked',
}: VsfIconProps) {
  return (
    <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
      <>
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z" />
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z" />
      </>
    </VsfIconBase>
  );
}
