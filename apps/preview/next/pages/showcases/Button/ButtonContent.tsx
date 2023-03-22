import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton, SfIconHome, SfIconStar, SfIconShoppingCart } from '@storefront-ui/react';

export default function ButtonContent() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4">
      <SfButton slotPrefix={<SfIconHome />}>Home</SfButton>

      <SfButton slotSuffix={<SfIconStar />}>Hello</SfButton>

      <SfButton type="button" square aria-label="Add to cart">
        <SfIconShoppingCart />
      </SfButton>
    </div>
  );
}
// #endregion source
ButtonContent.getLayout = ShowcasePageLayout;
