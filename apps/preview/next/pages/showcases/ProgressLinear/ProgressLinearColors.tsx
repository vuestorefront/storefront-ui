import { VsfProgressLinear } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex gap-4 flex-wrap">
      <VsfProgressLinear className="w-12 !text-cyan-700" value={60} size="lg" />
      <VsfProgressLinear className="w-12" size="lg" value={60} />
      <VsfProgressLinear className="w-12 !bg-yellow-200" value={60} size="lg" />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
