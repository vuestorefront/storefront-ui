import { VsfLoaderLinear } from '@storefront-ui/react/components/VsfLoaderLinear/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex gap-4 flex-wrap">
      <VsfLoaderLinear className="w-12 !text-cyan-700" size="lg" />
      <VsfLoaderLinear className="w-12" size="lg" />
      <VsfLoaderLinear className="w-12 !bg-yellow-200" size="lg" />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
