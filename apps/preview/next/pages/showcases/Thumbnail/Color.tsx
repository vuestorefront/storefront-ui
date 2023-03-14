import { VsfThumbnail } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return <VsfThumbnail className="bg-primary-500" />;
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
