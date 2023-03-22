import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfLink } from '@storefront-ui/react';

export default function LinkVariants() {
  return (
    <div className="space-x-4">
      <VsfLink variant="primary"> Primary </VsfLink>
      <VsfLink variant="secondary"> Secondary </VsfLink>
    </div>
  );
}

// #endregion source
LinkVariants.getLayout = ShowcasePageLayout;
