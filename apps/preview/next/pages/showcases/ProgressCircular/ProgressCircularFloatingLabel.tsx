import { VsfProgressCircular } from '@storefront-ui/react/components/VsfProgressCircular/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const value = 70;

  return (
    <div className="flex gap-4 flex-wrap">
      <VsfProgressCircular size="2xl" value={value}>
        <text className="font-medium" textAnchor="middle" alignmentBaseline="central" x="100%" y="100%">
          {value}%
        </text>
      </VsfProgressCircular>
      <VsfProgressCircular size="3xl" value={value}>
        <text
          className="font-medium fill-neutral-400"
          textAnchor="middle"
          alignmentBaseline="central"
          x="100%"
          y="100%"
        >
          {value}%
        </text>
      </VsfProgressCircular>
      <VsfProgressCircular size="3xl" value={value}>
        <text className="font-medium text-2xs" textAnchor="middle" alignmentBaseline="central" x="100%" y="100%">
          {value}%
        </text>
      </VsfProgressCircular>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
