import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfBadge, SfButton, SfIconShoppingCart } from '@storefront-ui/react';

export default function BadgeOutline() {
  return (
    <div className="flex gap-3">
      <div className="p-3 bg-white">
        <SfButton className="group relative" square variant="tertiary">
          <SfIconShoppingCart />
          <SfBadge
            content={100}
            max={99}
            className="outline outline-white group-hover:outline-primary-100 group-active:outline-primary-200"
          />
        </SfButton>
      </div>

      <div className="p-3 bg-primary-700">
        <SfButton className="group relative hover:bg-primary-800 active:bg-primary-900" square variant="tertiary">
          <SfIconShoppingCart className="text-white" />
          <SfBadge
            content={100}
            max={99}
            className="outline outline-primary-700 bg-white !text-neutral-900 group-hover:outline-primary-800 group-active:outline-primary-900"
          />
        </SfButton>
      </div>
    </div>
  );
}

// #endregion source
BadgeOutline.getLayout = ShowcasePageLayout;
