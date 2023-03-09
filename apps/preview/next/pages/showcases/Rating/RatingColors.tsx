import { VsfRating } from '@storefront-ui/react/components/VsfRating/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col">
      <VsfRating className="!text-red-600" value={4} />
      <VsfRating className="!text-purple-500" value={4} />
      <VsfRating className="!text-cyan-700" value={4} />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
