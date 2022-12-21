import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconVisibilityOff({
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.707 3.293a1 1 0 0 0-1.414 1.414L5.13 7.544a19.732 19.732 0 0 0-3.61 3.103 2.027 2.027 0 0 0 0 2.702c2.397 2.64 6.361 5.434 10.332 5.434h.283c1.2 0 2.399-.253 3.554-.68l3.19 3.19a1 1 0 0 0 1.414-1.414L3.707 3.293Zm9.812 12.64-5.453-5.452a4.217 4.217 0 0 0 5.453 5.452Z"
        />
        <path d="M16.136 11.177a4.216 4.216 0 0 1-.203 2.342l2.937 2.937a19.76 19.76 0 0 0 3.612-3.108 2.026 2.026 0 0 0-.003-2.701C20.055 7.979 16.033 5.16 12 5.217c-1.245-.018-2.49.239-3.687.681l2.169 2.168a4.217 4.217 0 0 1 5.655 3.111Z" />
      </>
    </VsfIconBase>
  );
}
