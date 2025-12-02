import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId } from 'react';
import { SfTooltip, useDisclosure } from '@storefront-ui/react';

export default function BasicTooltip() {
  const id = useId();
  const tooltipId = `${id}-tooltip`;
  const { isOpen, open, close } = useDisclosure();

  return (
    <SfTooltip label="This is a tooltip!" id={tooltipId} open={isOpen} showArrow placement="right">
      <span aria-describedby={tooltipId} onFocus={open} onBlur={close} tabIndex={0}>
        Hover or focus me!
      </span>
    </SfTooltip>
  );
}

// #endregion source
BasicTooltip.getLayout = ShowcasePageLayout;
