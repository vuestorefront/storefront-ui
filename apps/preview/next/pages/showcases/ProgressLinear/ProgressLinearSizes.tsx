import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfProgressLinear } from '@storefront-ui/react';

export default function ProgressLinearSizes() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row">
      <SfProgressLinear value={30} className="w-12" size="xs" />
      <SfProgressLinear value={30} className="w-12" size="sm" />
      <SfProgressLinear value={30} className="w-12" size="base" />
      <SfProgressLinear value={30} className="w-12" />
      <SfProgressLinear value={30} className="w-12" size="lg" />
      <SfProgressLinear value={30} className="w-12" size="xl" />
      <SfProgressLinear value={30} className="w-12" size="2xl" />
      <SfProgressLinear value={30} className="w-12" size="3xl" />
      <SfProgressLinear value={30} className="w-12" size="4xl" />
    </div>
  );
}

// #endregion source
ProgressLinearSizes.getLayout = ShowcasePageLayout;
