import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfCounter } from '@storefront-ui/react';

export default function CounterDemo() {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <VsfCounter size="xs"> 123 </VsfCounter>
      <VsfCounter size="sm"> 123 </VsfCounter>
      <VsfCounter size="base"> 123 </VsfCounter>
      <VsfCounter size="lg"> 123 </VsfCounter>
      <VsfCounter size="xl"> 123 </VsfCounter>
      <VsfCounter size="2xl"> 123 </VsfCounter>
    </div>
  );
}

// #endregion source
CounterDemo.getLayout = ShowcasePageLayout;
