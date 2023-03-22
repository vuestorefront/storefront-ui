import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfThumbnail } from '@storefront-ui/react';
import card from '@assets/card.png';

export default function ThumbnailImage() {
  return (
    <SfThumbnail size="xl">
      <img src={card.src} alt="Thumbnail avatar" />
    </SfThumbnail>
  );
}

// #endregion source
ThumbnailImage.getLayout = ShowcasePageLayout;
