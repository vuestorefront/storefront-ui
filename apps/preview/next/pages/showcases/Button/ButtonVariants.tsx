import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

export default function ButtonVariants() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <SfButton type="button" variant="primary">
        Hello
      </SfButton>

      <SfButton type="button" variant="secondary">
        Hello
      </SfButton>

      <SfButton type="button" variant="tertiary">
        Hello
      </SfButton>
    </div>
  );
}

// #endregion source
ButtonVariants.getLayout = ShowcasePageLayout;
