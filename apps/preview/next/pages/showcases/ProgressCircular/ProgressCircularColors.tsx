import { VsfProgressCircular } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex gap-4 flex-wrap">
      <VsfProgressCircular className="!text-cyan-700" value={70} size="3xl" />
      <VsfProgressCircular size="3xl" value={70} />
      <VsfProgressCircular className="!ring-yellow-200" value={70} size="3xl" />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
