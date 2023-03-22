import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfThumbnail } from '@storefront-ui/react';

export default function ThumbnailColor() {
  return <SfThumbnail className="bg-primary-500" />;
}

// #endregion source
ThumbnailColor.getLayout = ShowcasePageLayout;
