import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfLink } from '@storefront-ui/react';

export default function LinkVariants() {
  return (
    <div className="space-x-4">
      <SfLink variant="primary" href="#">
        Primary
      </SfLink>
      <SfLink variant="secondary" href="#">
        Secondary
      </SfLink>
    </div>
  );
}

// #endregion source
LinkVariants.getLayout = ShowcasePageLayout;
