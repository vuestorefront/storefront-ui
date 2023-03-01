import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfButton type="button" className="w-full">
      Hello
    </VsfButton>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
