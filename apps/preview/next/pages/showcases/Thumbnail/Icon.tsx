import { VsfThumbnail } from '@storefront-ui/react/components/VsfThumbnail';
import { VsfIconFavorite } from '@storefront-ui/react/components/VsfIcons/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfThumbnail size="xl" className="bg-gray-100 flex items-center justify-center">
      <VsfIconFavorite />
    </VsfThumbnail>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
