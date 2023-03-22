import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfLoaderCircular } from '@storefront-ui/react';

export default function LoaderCircularColors() {
  return (
    <div className="flex gap-4 flex-wrap">
      <SfLoaderCircular className="!text-cyan-700" size="2xl" />
      <SfLoaderCircular className="w-12" size="2xl" />
      <SfLoaderCircular className="!ring-yellow-400" size="2xl" />
    </div>
  );
}

// #endregion source
LoaderCircularColors.getLayout = ShowcasePageLayout;
