import { VsfProgressLinear } from '@storefront-ui/react/components/VsfProgressLinear/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row">
      <VsfProgressLinear value={30} className="w-12" size="xs" />
      <VsfProgressLinear value={30} className="w-12" size="sm" />
      <VsfProgressLinear value={30} className="w-12" size="base" />
      <VsfProgressLinear value={30} className="w-12" />
      <VsfProgressLinear value={30} className="w-12" size="lg" />
      <VsfProgressLinear value={30} className="w-12" size="xl" />
      <VsfProgressLinear value={30} className="w-12" size="2xl" />
      <VsfProgressLinear value={30} className="w-12" size="3xl" />
      <VsfProgressLinear value={30} className="w-12" size="4xl" />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
