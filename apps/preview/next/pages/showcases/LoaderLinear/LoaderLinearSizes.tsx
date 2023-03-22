import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfLoaderLinear } from '@storefront-ui/react';

export default function LoaderLinearSizes() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row">
      <SfLoaderLinear className="w-12" />
      <SfLoaderLinear className="w-12" size="minimal" />
      <SfLoaderLinear className="w-12" size="xs" />
      <SfLoaderLinear className="w-12" size="sm" />
      <SfLoaderLinear className="w-12" size="base" />
      <SfLoaderLinear className="w-12" size="lg" />
      <SfLoaderLinear className="w-12" size="xl" />
      <SfLoaderLinear className="w-12" size="2xl" />
      <SfLoaderLinear className="w-12" size="3xl" />
      <SfLoaderLinear className="w-12" size="4xl" />
    </div>
  );
}

// #endregion source
LoaderLinearSizes.getLayout = ShowcasePageLayout;
