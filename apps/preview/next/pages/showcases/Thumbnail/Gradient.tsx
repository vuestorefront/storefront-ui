import { VsfThumbnail } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return <VsfThumbnail className="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />;
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
