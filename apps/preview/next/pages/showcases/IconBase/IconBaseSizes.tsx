import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfIconHome } from '@storefront-ui/react';

export default function IconSizesDemo() {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      <VsfIconHome size="sm" />
      <VsfIconHome />
      <VsfIconHome size="lg" />
      <VsfIconHome size="xl" />
      <VsfIconHome size="2xl" />
      <VsfIconHome size="3xl" />
      <VsfIconHome size="4xl" />
    </div>
  );
}

// #endregion source
IconSizesDemo.getLayout = ShowcasePageLayout;
