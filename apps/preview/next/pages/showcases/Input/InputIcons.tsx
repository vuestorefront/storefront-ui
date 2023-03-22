import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfInput, SfIconSearch, SfIconLock } from '@storefront-ui/react';

export default function InputWithPrefix() {
  return <SfInput slotPrefix={<SfIconSearch />} slotSuffix={<SfIconLock />} />;
}

// #endregion source
InputWithPrefix.getLayout = ShowcasePageLayout;
