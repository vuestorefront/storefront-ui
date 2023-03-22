import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfLoaderCircular } from '@storefront-ui/react';

export default function LoaderCircularSizes() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row mb-6 mr-6">
      <VsfLoaderCircular size="xs" />
      <VsfLoaderCircular size="sm" />
      <VsfLoaderCircular size="base" />
      <VsfLoaderCircular />
      <VsfLoaderCircular size="lg" />
      <VsfLoaderCircular size="xl" />
      <VsfLoaderCircular size="2xl" />
      <VsfLoaderCircular size="3xl" />
      <VsfLoaderCircular size="4xl" />
    </div>
  );
}

// #endregion source
LoaderCircularSizes.getLayout = ShowcasePageLayout;
