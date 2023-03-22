import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfButton } from '@storefront-ui/react';

export default function ButtonTruncation() {
  return (
    <VsfButton>
      <span className="truncate max-w-[200px]"> Too long description for button </span>
    </VsfButton>
  );
}
// #endregion source
ButtonTruncation.getLayout = ShowcasePageLayout;
