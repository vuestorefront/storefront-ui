import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfProgressLinear } from '@storefront-ui/react';

export default function ProgressLinearColors() {
  return (
    <div className="flex gap-4 flex-wrap">
      <SfProgressLinear className="w-12 !text-cyan-700" value={60} size="lg" />
      <SfProgressLinear className="w-12" size="lg" value={60} />
      <SfProgressLinear className="w-12 !bg-yellow-200" value={60} size="lg" />
    </div>
  );
}

// #endregion source
ProgressLinearColors.getLayout = ShowcasePageLayout;
