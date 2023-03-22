import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconHome } from '@storefront-ui/react';

export default function IconSizesDemo() {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      <SfIconHome size="sm" />
      <SfIconHome />
      <SfIconHome size="lg" />
      <SfIconHome size="xl" />
      <SfIconHome size="2xl" />
      <SfIconHome size="3xl" />
      <SfIconHome size="4xl" />
    </div>
  );
}

// #endregion source
IconSizesDemo.getLayout = ShowcasePageLayout;
