import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfChip, SfThumbnail } from '@storefront-ui/react';

export default function ChipWithThumbnail() {
  return (
    <>
      <SfChip size="sm" className="mr-2" slotPrefix={<SfThumbnail className="bg-red-500" size="sm" />}>
        Red
      </SfChip>
      <SfChip slotPrefix={<SfThumbnail className="bg-secondary-400" size="base" />}>Blue</SfChip>
    </>
  );
}

// #endregion source

ChipWithThumbnail.getLayout = ShowcasePageLayout;
