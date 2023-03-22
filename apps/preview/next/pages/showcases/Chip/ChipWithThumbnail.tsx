import { VsfChip, VsfThumbnail } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <>
      <VsfChip size="sm" className="mr-2" slotPrefix={<VsfThumbnail className="bg-red-500" size="sm" />}>
        Red
      </VsfChip>
      <VsfChip slotPrefix={<VsfThumbnail className="bg-blue-500" size="base" />}>Blue</VsfChip>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
