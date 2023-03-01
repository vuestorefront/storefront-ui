import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfButton>
      <span className="truncate max-w-[200px]"> Too long description for button </span>
    </VsfButton>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
