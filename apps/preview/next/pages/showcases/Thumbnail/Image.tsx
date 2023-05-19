import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfThumbnail } from '@storefront-ui/react';

export default function ThumbnailImage() {
  return (
    <SfThumbnail size="xl">
      <img src="http://localhost:3100/@assets/card.png" alt="Thumbnail avatar" />
    </SfThumbnail>
  );
}

// #endregion source
ThumbnailImage.getLayout = ShowcasePageLayout;
