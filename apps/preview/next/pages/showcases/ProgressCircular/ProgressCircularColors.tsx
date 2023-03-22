import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfProgressCircular } from '@storefront-ui/react';

export default function ProgressCircularColors() {
  return (
    <div className="flex gap-4 flex-wrap">
      <SfProgressCircular className="!text-cyan-700" value={70} size="3xl" />
      <SfProgressCircular size="3xl" value={70} />
      <SfProgressCircular className="!ring-yellow-200" value={70} size="3xl" />
    </div>
  );
}

// #endregion source
ProgressCircularColors.getLayout = ShowcasePageLayout;
