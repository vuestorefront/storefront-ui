import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfCounter } from '@storefront-ui/react';

export default function CounterDemo() {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <SfCounter size="xs"> 123 </SfCounter>
      <SfCounter size="sm"> 123 </SfCounter>
      <SfCounter size="base"> 123 </SfCounter>
      <SfCounter size="lg"> 123 </SfCounter>
      <SfCounter size="xl"> 123 </SfCounter>
      <SfCounter size="2xl"> 123 </SfCounter>
    </div>
  );
}

// #endregion source
CounterDemo.getLayout = ShowcasePageLayout;
