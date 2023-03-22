import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfThumbnail } from '@storefront-ui/react';
import card from '@assets/card.png';

export default function ThumbnailImage() {
  return (
    <VsfThumbnail size="xl">
      <img src={card.src} alt="Thumbnail avatar" />
    </VsfThumbnail>
  );
}

// #endregion source
ThumbnailImage.getLayout = ShowcasePageLayout;
