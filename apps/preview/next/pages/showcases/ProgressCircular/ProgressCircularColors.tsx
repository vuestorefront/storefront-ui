import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfProgressCircular } from '@storefront-ui/react';

export default function ProgressCircularColors() {
  return (
    <div className="flex gap-4 flex-wrap">
      <VsfProgressCircular className="!text-cyan-700" value={70} size="3xl" />
      <VsfProgressCircular size="3xl" value={70} />
      <VsfProgressCircular className="!ring-yellow-200" value={70} size="3xl" />
    </div>
  );
}

// #endregion source
ProgressCircularColors.getLayout = ShowcasePageLayout;
