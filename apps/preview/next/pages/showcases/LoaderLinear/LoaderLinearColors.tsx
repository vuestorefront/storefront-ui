import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfLoaderLinear } from '@storefront-ui/react';

export default function LoaderLinearColors() {
  return (
    <div className="flex gap-4 flex-wrap">
      <SfLoaderLinear className="w-12 !text-cyan-700" size="lg" />
      <SfLoaderLinear className="w-12" size="lg" />
      <SfLoaderLinear className="w-12 !bg-yellow-200" size="lg" />
    </div>
  );
}

// #endregion source
LoaderLinearColors.getLayout = ShowcasePageLayout;
