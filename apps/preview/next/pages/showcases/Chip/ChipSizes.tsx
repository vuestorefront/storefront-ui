import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfChip } from '@storefront-ui/react';

export default function ChipSizes() {
  return (
    <div>
      <VsfChip size="sm" className="mr-2">
        Small
      </VsfChip>
      <VsfChip size="base" className="mr-2">
        Base
      </VsfChip>
      <VsfChip>Default</VsfChip>
    </div>
  );
}

// #endregion source
ChipSizes.getLayout = ShowcasePageLayout;
