import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfCounter } from '@storefront-ui/react';

export default function CounterPill() {
  return (
    <SfCounter size="xl" pill>
      123
    </SfCounter>
  );
}

// #endregion source
CounterPill.getLayout = ShowcasePageLayout;
