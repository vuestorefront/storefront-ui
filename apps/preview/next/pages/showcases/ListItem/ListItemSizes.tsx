import { ShowcasePageLayout } from '../../showcases';
// #region sources
import { VsfListItem } from '@storefront-ui/react';

export default function ListItemSizes() {
  return (
    <div className="flex flex-col max-w-sm gap-4">
      <VsfListItem size="sm">
        <span className="break-words">Label</span>
      </VsfListItem>
      <VsfListItem>
        <span className="break-words">Label</span>
      </VsfListItem>
      <VsfListItem size="lg">
        <span className="break-words">Label</span>
      </VsfListItem>
    </div>
  );
}

// #endregion source
ListItemSizes.getLayout = ShowcasePageLayout;
