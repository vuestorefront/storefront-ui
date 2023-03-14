import { VsfButton, VsfButtonVariant } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col items-center space-y-4 extra-small:block extra-small:space-x-4">
      <VsfButton type="button" variant={VsfButtonVariant.primary}>
        Hello
      </VsfButton>

      <VsfButton type="button" variant={VsfButtonVariant.secondary}>
        Hello
      </VsfButton>

      <VsfButton type="button" variant={VsfButtonVariant.tertiary}>
        Hello
      </VsfButton>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
