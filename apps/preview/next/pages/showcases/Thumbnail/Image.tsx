import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfThumbnail } from '@storefront-ui/react';

export default function ThumbnailImage() {
  return (
    <SfThumbnail size="xl">
      <img
        src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/fixture/card.png"
        alt="Thumbnail avatar"
      />
    </SfThumbnail>
  );
}

// #endregion source
ThumbnailImage.getLayout = ShowcasePageLayout;
