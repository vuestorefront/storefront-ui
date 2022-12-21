import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconHelp({
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
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 15.833a1.25 1.25 0 1 1 0-2.501 1.25 1.25 0 0 1 0 2.501Zm1.333-5.066a.834.834 0 0 0-.5.764.834.834 0 0 1-1.666 0 2.5 2.5 0 0 1 1.5-2.292 1.667 1.667 0 1 0-2.334-1.527.834.834 0 0 1-1.666 0 3.333 3.333 0 1 1 4.666 3.056v-.001Z" />
    </VsfIconBase>
  );
}
