import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfInput, VsfIconSearch, VsfIconLock } from '@storefront-ui/react';

export default function InputWithPrefix() {
  return <VsfInput slotPrefix={<VsfIconSearch />} slotSuffix={<VsfIconLock />} />;
}

// #endregion source
InputWithPrefix.getLayout = ShowcasePageLayout;
