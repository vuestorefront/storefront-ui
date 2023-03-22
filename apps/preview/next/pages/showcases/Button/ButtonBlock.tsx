import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfButton } from '@storefront-ui/react';

export default function ButtonBlock() {
  return (
    <VsfButton type="button" className="w-full">
      Hello
    </VsfButton>
  );
}
// #endregion source
ButtonBlock.getLayout = ShowcasePageLayout;
