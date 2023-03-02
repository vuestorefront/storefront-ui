import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { VsfIconHome, VsfIconStar, VsfIconShoppingCart } from '@storefront-ui/react/components/VsfIcons';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col items-center space-y-4 extra-small:flex-row extra-small:space-y-0 extra-small:space-x-4">
      <VsfButton slotPrefix={<VsfIconHome />}>Home</VsfButton>

      <VsfButton slotSuffix={<VsfIconStar />}>Hello</VsfButton>

      <VsfButton type="button" square aria-label="Add to cart">
        <VsfIconShoppingCart />
      </VsfButton>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
