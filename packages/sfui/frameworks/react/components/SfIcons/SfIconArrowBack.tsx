import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconArrowBack({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="arrow-back" {...attributes}>
      <path d="m10.875 19.3-6.6-6.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 4 12q0-.2.062-.375a.9.9 0 0 1 .213-.325l6.6-6.6a.98.98 0 0 1 .687-.288.93.93 0 0 1 .713.288q.3.274.313.687a.93.93 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713q0 .424-.287.712a.97.97 0 0 1-.713.288H7.4l4.9 4.9q.275.275.288.7a.87.87 0 0 1-.288.7q-.275.3-.7.3a1 1 0 0 1-.725-.3" />
    </SfIconBase>
  );
}
