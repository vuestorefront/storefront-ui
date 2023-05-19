import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfBadge, SfButton, SfIconShoppingCart } from '@storefront-ui/react';

export default function BadgePlacement() {
  return (
    <div className="flex gap-3">
      <SfButton className="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={7} placement="top-right" />
      </SfButton>

      <SfButton className="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={7} placement="bottom-right" />
      </SfButton>

      <SfButton className="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={7} placement="top-left" />
      </SfButton>

      <SfButton className="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={7} placement="bottom-left" />
      </SfButton>
    </div>
  );
}

// #endregion source
BadgePlacement.getLayout = ShowcasePageLayout;
