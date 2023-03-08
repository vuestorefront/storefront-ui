import { VsfLoaderCircular } from '@storefront-ui/react/components/VsfLoaderCircular/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex gap-4 flex-wrap">
      <VsfLoaderCircular className="!text-cyan-700" size="2xl" />
      <VsfLoaderCircular className="w-12" size="2xl" />
      <VsfLoaderCircular className="!ring-yellow-400" size="2xl" />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
