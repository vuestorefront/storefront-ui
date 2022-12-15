import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconWarehouse({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'warehouse',
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
        <path d="M12 2a2.2 2.2 0 0 0-1.034.259l-7.8 4.16A2.2 2.2 0 0 0 2 8.36V21a1 1 0 1 0 2 0V8.36a.2.2 0 0 1 .106-.177l7.8-4.16a.2.2 0 0 1 .188 0l7.8 4.16A.2.2 0 0 1 20 8.36V21a1 1 0 1 0 2 0V8.36a2.2 2.2 0 0 0-1.165-1.941l-7.8-4.16A2.2 2.2 0 0 0 12 2Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 10a1 1 0 0 0-1 1v4H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-1v-4a1 1 0 0 0-1-1H9Zm5 5v-3h-4v3h4Zm-6 2v3h3v-3H8Zm8 3h-3v-3h3v3Z"
        />
      </>
    </VsfIconBase>
  );
}
