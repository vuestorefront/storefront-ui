import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfThumbnail } from '@storefront-ui/react';

export default function ThumbnailColor() {
  return <VsfThumbnail className="bg-primary-500" />;
}

// #endregion source
ThumbnailColor.getLayout = ShowcasePageLayout;
