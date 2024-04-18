import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconShare({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="share" {...attributes}>
      <path d="M18 22a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 15 19c0-.117.008-.238.025-.363s.042-.237.075-.337l-7.05-4.1c-.283.25-.6.446-.95.588-.35.141-.717.212-1.1.212a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 3 12c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 6 9c.383 0 .75.07 1.1.213.35.141.667.337.95.587l7.05-4.1a1.843 1.843 0 0 1-.075-.338A2.738 2.738 0 0 1 15 5c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 18 2c.833 0 1.542.292 2.125.875S21 4.167 21 5s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 8c-.383 0-.75-.07-1.1-.213a3.293 3.293 0 0 1-.95-.587L8.9 11.3c.033.1.058.212.075.337a2.742 2.742 0 0 1 0 .726 1.838 1.838 0 0 1-.075.337l7.05 4.1c.283-.25.6-.446.95-.588.35-.141.717-.212 1.1-.212.833 0 1.542.292 2.125.875S21 18.167 21 19s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 22" />
    </SfIconBase>
  );
}
