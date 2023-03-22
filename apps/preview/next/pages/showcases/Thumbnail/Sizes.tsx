import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfThumbnail } from '@storefront-ui/react';

export default function ThumbnailSizes() {
  return (
    <div className="flex items-center justify-around max-w-sm">
      <VsfThumbnail size="sm" className="bg-primary-500 mr-2" />
      <VsfThumbnail size="base" className="bg-primary-500 mr-2" />
      <VsfThumbnail size="lg" className="bg-primary-500 mr-2" />
      <VsfThumbnail size="xl" className="bg-primary-500" />
    </div>
  );
}

// #endregion source
ThumbnailSizes.getLayout = ShowcasePageLayout;
