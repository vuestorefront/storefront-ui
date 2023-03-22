import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfButton } from '@storefront-ui/react';

export default function ButtonSizes() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <VsfButton type="button" size="sm">
        Hello
      </VsfButton>

      <VsfButton type="button" size="base">
        Hello
      </VsfButton>

      <VsfButton type="button" size="lg">
        Hello
      </VsfButton>
    </div>
  );
}
// #endregion source
ButtonSizes.getLayout = ShowcasePageLayout;
