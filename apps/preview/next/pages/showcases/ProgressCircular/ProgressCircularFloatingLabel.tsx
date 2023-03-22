import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfProgressCircular } from '@storefront-ui/react';

export default function ProgressCircularWithLabels() {
  const value = 70;

  return (
    <div className="flex gap-4 flex-wrap">
      <SfProgressCircular size="2xl" value={value}>
        <text className="font-medium" textAnchor="middle" alignmentBaseline="central" x="100%" y="100%">
          {value}%
        </text>
      </SfProgressCircular>
      <SfProgressCircular size="3xl" value={value}>
        <text
          className="font-medium fill-neutral-400"
          textAnchor="middle"
          alignmentBaseline="central"
          x="100%"
          y="100%"
        >
          {value}%
        </text>
      </SfProgressCircular>
      <SfProgressCircular size="3xl" value={value}>
        <text className="font-medium text-2xs" textAnchor="middle" alignmentBaseline="central" x="100%" y="100%">
          {value}%
        </text>
      </SfProgressCircular>
    </div>
  );
}

// #endregion source
ProgressCircularWithLabels.getLayout = ShowcasePageLayout;
