import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfThumbnail, SfIconFavorite } from '@storefront-ui/react';

export default function ThumbnailIcon() {
  return (
    <SfThumbnail size="xl" className="bg-gray-100 flex items-center justify-center">
      <SfIconFavorite />
    </SfThumbnail>
  );
}

// #endregion source
ThumbnailIcon.getLayout = ShowcasePageLayout;
