import { VsfButton } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <VsfButton type="button" size="sm">
        Hello
      </VsfButton>

      <VsfButton type="button">Hello</VsfButton>

      <VsfButton type="button" size="lg">
        Hello
      </VsfButton>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
