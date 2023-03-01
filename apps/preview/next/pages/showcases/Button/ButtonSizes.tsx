import { VsfButton, VsfButtonSize } from '@storefront-ui/react/components/VsfButton';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="space-x-4">
      <VsfButton type="button" size={VsfButtonSize.sm}>
        Hello
      </VsfButton>

      <VsfButton type="button" size={VsfButtonSize.base}>
        Hello
      </VsfButton>

      <VsfButton type="button" size={VsfButtonSize.lg}>
        Hello
      </VsfButton>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
