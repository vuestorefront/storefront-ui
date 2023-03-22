import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfChip, SfThumbnail } from '@storefront-ui/react';

export default function SquareChips() {
  return (
    <>
      <SfChip size="sm" className="mr-2" square>
        <SfThumbnail className="bg-red-500" size="sm" aria-label="Red thumbnail chip" />
      </SfChip>
      <SfChip square>
        <SfThumbnail className="bg-blue-500" size="base" aria-label="Blue thumbnail chip" />
      </SfChip>
    </>
  );
}

// #endregion source
SquareChips.getLayout = ShowcasePageLayout;
