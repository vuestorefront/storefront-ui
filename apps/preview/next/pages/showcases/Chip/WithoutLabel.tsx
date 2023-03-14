import { VsfChip, VsfThumbnail } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
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

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
