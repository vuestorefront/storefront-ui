import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfListItem, SfCounter, SfIconChevronRight, SfIconTune } from '@storefront-ui/react';

export default function ListItemSlots() {
  return (
    <SfListItem className="max-w-sm" slotPrefix={<SfIconTune />} slotSuffix={<SfIconChevronRight />}>
      <div className="break-words">
        Label
        <SfCounter className="ml-2" size="xl">
          123
        </SfCounter>
      </div>
      <span className="text-xs text-neutral-500 break-words">Secondary text</span>
    </SfListItem>
  );
}

// #endregion source
ListItemSlots.getLayout = ShowcasePageLayout;
