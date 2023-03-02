import { VsfCheckbox } from '@storefront-ui/react/components/VsfCheckbox';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="space-x-4">
      <VsfCheckbox value="value" />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
