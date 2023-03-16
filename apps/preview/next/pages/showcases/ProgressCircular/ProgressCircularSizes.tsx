import { VsfProgressCircular } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row mr-6 mb-6">
      <VsfProgressCircular value={30} size="xs" />
      <VsfProgressCircular value={30} size="sm" />
      <VsfProgressCircular value={30} size="base" />
      <VsfProgressCircular value={30} />
      <VsfProgressCircular value={30} size="lg" />
      <VsfProgressCircular value={30} size="xl" />
      <VsfProgressCircular value={30} size="2xl" />
      <VsfProgressCircular value={30} size="3xl" />
      <VsfProgressCircular value={30} size="4xl" />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
