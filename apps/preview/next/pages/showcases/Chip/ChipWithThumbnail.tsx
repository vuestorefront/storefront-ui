import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfChip, VsfThumbnail } from '@storefront-ui/react';

export default function ChipWithThumbnail() {
  return (
    <>
      <VsfChip size="sm" className="mr-2" slotPrefix={<VsfThumbnail className="bg-red-500" size="sm" />}>
        Red
      </VsfChip>
      <VsfChip slotPrefix={<VsfThumbnail className="bg-blue-500" size="base" />}>Blue</VsfChip>
    </>
  );
}

// #endregion source

ChipWithThumbnail.getLayout = ShowcasePageLayout;
