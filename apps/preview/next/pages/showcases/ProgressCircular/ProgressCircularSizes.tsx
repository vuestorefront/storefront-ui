import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfProgressCircular } from '@storefront-ui/react';

export default function ProgressCircularSizes() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row mr-6 mb-6">
      <SfProgressCircular value={30} size="xs" />
      <SfProgressCircular value={30} size="sm" />
      <SfProgressCircular value={30} size="base" />
      <SfProgressCircular value={30} />
      <SfProgressCircular value={30} size="lg" />
      <SfProgressCircular value={30} size="xl" />
      <SfProgressCircular value={30} size="2xl" />
      <SfProgressCircular value={30} size="3xl" />
      <SfProgressCircular value={30} size="4xl" />
    </div>
  );
}

// #endregion source
ProgressCircularSizes.getLayout = ShowcasePageLayout;
