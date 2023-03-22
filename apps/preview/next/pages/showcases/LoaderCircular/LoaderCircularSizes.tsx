import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfLoaderCircular } from '@storefront-ui/react';

export default function LoaderCircularSizes() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row mb-6 mr-6">
      <SfLoaderCircular size="xs" />
      <SfLoaderCircular size="sm" />
      <SfLoaderCircular size="base" />
      <SfLoaderCircular />
      <SfLoaderCircular size="lg" />
      <SfLoaderCircular size="xl" />
      <SfLoaderCircular size="2xl" />
      <SfLoaderCircular size="3xl" />
      <SfLoaderCircular size="4xl" />
    </div>
  );
}

// #endregion source
LoaderCircularSizes.getLayout = ShowcasePageLayout;
