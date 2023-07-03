import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfListItem, SfCounter, SfIconChevronRight, SfIconTune } from '@storefront-ui/react';

export default function ListItemSlots() {
  return (
    <SfListItem className="max-w-sm" slotPrefix={<SfIconTune />} slotSuffix={<SfIconChevronRight />}>
      <span className="break-words">
        Label
        <SfCounter className="ml-2">123</SfCounter>
      </span>
      <span className="block text-xs break-words text-neutral-500">Secondary text</span>
    </SfListItem>
  );
}

// #endregion source
ListItemSlots.getLayout = ShowcasePageLayout;
