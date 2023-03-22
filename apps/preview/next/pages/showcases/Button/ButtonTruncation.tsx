import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

export default function ButtonTruncation() {
  return (
    <SfButton>
      <span className="truncate max-w-[200px]"> Too long description for button </span>
    </SfButton>
  );
}
// #endregion source
ButtonTruncation.getLayout = ShowcasePageLayout;
