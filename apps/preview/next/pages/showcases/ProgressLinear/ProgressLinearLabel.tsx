import { VsfProgressLinear } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const value = 70;

  return (
    <div className="flex flex-col gap-4">
      <VsfProgressLinear size="lg" value={value} className="w-12" aria-label={`${value}%`} />
      <label className="inline-flex items-center gap-2">
        <VsfProgressLinear className="w-12" size="lg" value={value} />
        <span className="font-medium text-lg">{value}%</span>
      </label>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
