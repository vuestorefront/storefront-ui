import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

export default function ButtonVariants() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <SfButton variant="primary">Hello</SfButton>

      <SfButton variant="secondary">Hello</SfButton>

      <SfButton variant="tertiary">Hello</SfButton>
    </div>
  );
}

// #endregion source
ButtonVariants.getLayout = ShowcasePageLayout;
