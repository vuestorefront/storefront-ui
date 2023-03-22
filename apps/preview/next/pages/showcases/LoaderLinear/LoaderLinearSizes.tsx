import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfLoaderLinear } from '@storefront-ui/react';

export default function LoaderLinearSizes() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row">
      <VsfLoaderLinear className="w-12" />
      <VsfLoaderLinear className="w-12" size="minimal" />
      <VsfLoaderLinear className="w-12" size="xs" />
      <VsfLoaderLinear className="w-12" size="sm" />
      <VsfLoaderLinear className="w-12" size="base" />
      <VsfLoaderLinear className="w-12" size="lg" />
      <VsfLoaderLinear className="w-12" size="xl" />
      <VsfLoaderLinear className="w-12" size="2xl" />
      <VsfLoaderLinear className="w-12" size="3xl" />
      <VsfLoaderLinear className="w-12" size="4xl" />
    </div>
  );
}

// #endregion source
LoaderLinearSizes.getLayout = ShowcasePageLayout;
