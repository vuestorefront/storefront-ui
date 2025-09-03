import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

export default function ButtonSizes() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <SfButton size="sm">Hello</SfButton>

      <SfButton size="base">Hello</SfButton>

      <SfButton size="lg">Hello</SfButton>
    </div>
  );
}
// #endregion source
ButtonSizes.getLayout = ShowcasePageLayout;
