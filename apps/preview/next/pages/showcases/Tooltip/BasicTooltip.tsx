import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId } from 'react';
import { SfTooltip } from '@storefront-ui/react';

export default function BasicTooltip() {
  const id = useId();
  const tooltipId = `${id}-tooltip`;

  return (
    <SfTooltip label="This is a tooltip!" id={tooltipId}>
      <span aria-describedby={tooltipId}>Hover me!</span>
    </SfTooltip>
  );
}

// #endregion source
BasicTooltip.getLayout = ShowcasePageLayout;
