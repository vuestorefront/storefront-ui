import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

export default function ButtonSizes() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <SfButton type="button" size="sm">
        Hello
      </SfButton>

      <SfButton type="button" size="base">
        Hello
      </SfButton>

      <SfButton type="button" size="lg">
        Hello
      </SfButton>
    </div>
  );
}
// #endregion source
ButtonSizes.getLayout = ShowcasePageLayout;
