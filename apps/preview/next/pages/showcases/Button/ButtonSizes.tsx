import { VsfButton, VsfButtonSize } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col items-center space-y-4 extra-small:block extra-small:space-x-4">
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
