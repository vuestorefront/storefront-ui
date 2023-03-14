import { VsfInput } from '@storefront-ui/react/components/VsfInput/index';
import { VsfIconSearch, VsfIconLock } from '@storefront-ui/react/components/VsfIcons/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return <VsfInput slotPrefix={<VsfIconSearch />} slotSuffix={<VsfIconLock />} />;
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
