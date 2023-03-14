import { VsfInput, VsfIconSearch, VsfIconLock } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return <VsfInput slotPrefix={<VsfIconSearch />} slotSuffix={<VsfIconLock />} />;
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
