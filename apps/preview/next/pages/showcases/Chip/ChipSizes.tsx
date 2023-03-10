import { VsfChip } from '@storefront-ui/react/components/VsfChip';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div>
      <VsfChip size="sm" className="mr-2">
        Small
      </VsfChip>
      <VsfChip size="base" className="mr-2">
        Base
      </VsfChip>
      <VsfChip>Default</VsfChip>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
