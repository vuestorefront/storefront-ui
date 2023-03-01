import { VsfButton, VsfButtonVariant } from '@storefront-ui/react/components/VsfButton';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="space-x-4">
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
