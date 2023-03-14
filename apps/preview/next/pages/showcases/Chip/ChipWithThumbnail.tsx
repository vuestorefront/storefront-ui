import { VsfChip, VsfThumbnail } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <>
      <VsfChip size="sm" className="mr-2">
        <VsfThumbnail className="mr-2 bg-red-500" size="sm" />
        <span>Red</span>
      </VsfChip>
      <VsfChip>
        <VsfThumbnail className="mr-2 bg-blue-500" size="base" />
        <span>Blue</span>
      </VsfChip>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
