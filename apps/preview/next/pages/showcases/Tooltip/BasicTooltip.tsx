import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTooltip } from '@storefront-ui/react';

export default function BasicTooltip() {
  return (
    <SfTooltip label="This is a tooltip!">
      <span>Hover me!</span>
    </SfTooltip>
  );
}

// #endregion source
BasicTooltip.getLayout = ShowcasePageLayout;
