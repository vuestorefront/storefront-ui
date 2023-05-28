import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfBadge, SfButton, SfIconShoppingCart } from '@storefront-ui/react';

export default function BadgeBasic() {
  return (
    <div className="flex gap-3">
      <SfButton className="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={10} />
      </SfButton>

      <SfButton className="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={10000} />
      </SfButton>

      <SfButton className="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content="New" />
      </SfButton>

      <SfButton className="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge variant="dot" />
      </SfButton>
    </div>
  );
}

// #endregion source
BadgeBasic.getLayout = ShowcasePageLayout;
