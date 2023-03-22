import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfButton, VsfIconHome, VsfIconStar, VsfIconShoppingCart } from '@storefront-ui/react';

export default function ButtonContent() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4">
      <VsfButton slotPrefix={<VsfIconHome />}>Home</VsfButton>

      <VsfButton slotSuffix={<VsfIconStar />}>Hello</VsfButton>

      <VsfButton type="button" square aria-label="Add to cart">
        <VsfIconShoppingCart />
      </VsfButton>
    </div>
  );
}
// #endregion source
ButtonContent.getLayout = ShowcasePageLayout;
