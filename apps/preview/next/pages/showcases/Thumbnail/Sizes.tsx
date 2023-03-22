import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfThumbnail } from '@storefront-ui/react';

export default function ThumbnailSizes() {
  return (
    <div className="flex items-center justify-around max-w-sm">
      <SfThumbnail size="sm" className="bg-primary-500 mr-2" />
      <SfThumbnail size="base" className="bg-primary-500 mr-2" />
      <SfThumbnail size="lg" className="bg-primary-500 mr-2" />
      <SfThumbnail size="xl" className="bg-primary-500" />
    </div>
  );
}

// #endregion source
ThumbnailSizes.getLayout = ShowcasePageLayout;
