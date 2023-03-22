import { VsfListItem, VsfCounter, VsfIconChevronRight, VsfIconTune } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
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

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
