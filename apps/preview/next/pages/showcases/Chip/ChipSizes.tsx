import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfChip } from '@storefront-ui/react';

export default function ChipSizes() {
  return (
    <div>
      <SfChip size="sm" className="mr-2">
        Small
      </SfChip>
      <SfChip size="base" className="mr-2">
        Base
      </SfChip>
      <SfChip>Default</SfChip>
    </div>
  );
}

// #endregion source
ChipSizes.getLayout = ShowcasePageLayout;
