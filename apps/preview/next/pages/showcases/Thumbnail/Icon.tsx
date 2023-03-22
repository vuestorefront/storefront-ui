import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfThumbnail, VsfIconFavorite } from '@storefront-ui/react';

export default function ThumbnailIcon() {
  return (
    <VsfThumbnail size="xl" className="bg-gray-100 flex items-center justify-center">
      <VsfIconFavorite />
    </VsfThumbnail>
  );
}

// #endregion source
ThumbnailIcon.getLayout = ShowcasePageLayout;
