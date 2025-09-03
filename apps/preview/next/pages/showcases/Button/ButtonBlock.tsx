import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

export default function ButtonBlock() {
  return <SfButton className="w-full">Hello</SfButton>;
}
// #endregion source
ButtonBlock.getLayout = ShowcasePageLayout;
