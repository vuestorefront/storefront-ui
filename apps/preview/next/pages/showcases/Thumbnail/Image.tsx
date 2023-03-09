import { VsfThumbnail } from '@storefront-ui/react/components/VsfThumbnail';
import card from '@assets/card.png';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfThumbnail size="xl">
      <img src={card.src} alt="Thumbnail avatar" />
    </VsfThumbnail>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
