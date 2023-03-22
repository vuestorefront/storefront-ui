import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfButton } from '@storefront-ui/react';

export default function ButtonVariants() {
  return (
    <div className="flex flex-col items-center  extra-small:flex-row gap-4">
      <VsfButton type="button" variant="primary">
        Hello
      </VsfButton>

      <VsfButton type="button" variant="secondary">
        Hello
      </VsfButton>

      <VsfButton type="button" variant="tertiary">
        Hello
      </VsfButton>
    </div>
  );
}

// #endregion source
ButtonVariants.getLayout = ShowcasePageLayout;
