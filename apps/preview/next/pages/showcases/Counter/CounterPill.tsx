import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfCounter } from '@storefront-ui/react';

export default function CounterPill() {
  return (
    <VsfCounter size="xl" pill>
      123
    </VsfCounter>
  );
}

// #endregion source
CounterPill.getLayout = ShowcasePageLayout;
