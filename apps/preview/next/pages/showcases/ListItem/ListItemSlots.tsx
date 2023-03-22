import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfListItem, VsfCounter, VsfIconChevronRight, VsfIconTune } from '@storefront-ui/react';

export default function ListItemSlots() {
  return (
    <VsfListItem className="max-w-sm" slotPrefix={<VsfIconTune />} slotSuffix={<VsfIconChevronRight />}>
      <div className="break-words">
        Label
        <VsfCounter className="ml-2" size="xl">
          123
        </VsfCounter>
      </div>
      <span className="text-xs text-neutral-500 break-words">Secondary text</span>
    </VsfListItem>
  );
}

// #endregion source
ListItemSlots.getLayout = ShowcasePageLayout;
