import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfChip, VsfThumbnail } from '@storefront-ui/react';

export default function SquareChips() {
  return (
    <>
      <VsfChip size="sm" className="mr-2" square>
        <VsfThumbnail className="bg-red-500" size="sm" aria-label="Red thumbnail chip" />
      </VsfChip>
      <VsfChip square>
        <VsfThumbnail className="bg-blue-500" size="base" aria-label="Blue thumbnail chip" />
      </VsfChip>
    </>
  );
}

// #endregion source
SquareChips.getLayout = ShowcasePageLayout;
