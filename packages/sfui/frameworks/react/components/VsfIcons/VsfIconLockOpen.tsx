import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSizeEnum } from '../VsfIconBase';

export default function VsfIconLockOpen({
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
      data-testid="lock-open"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <>
        <path d="M10.99 17.135a1.667 1.667 0 1 0 1.853-2.772 1.667 1.667 0 0 0-1.852 2.772Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.167 9.916h-.625V7.624A5.626 5.626 0 0 0 6.527 6.008a1.042 1.042 0 0 0 1.996.598 3.543 3.543 0 0 1 6.935 1.018V9.5a.417.417 0 0 1-.416.417H5.667A1.667 1.667 0 0 0 4 11.583v8.75a1.667 1.667 0 0 0 1.667 1.666h12.5a1.667 1.667 0 0 0 1.666-1.666v-8.75a1.667 1.667 0 0 0-1.666-1.667ZM6 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7Z"
        />
      </>
    </VsfIconBase>
  );
}
