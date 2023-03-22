import { ShowcasePageLayout } from '../../showcases';
// #region sources
import { SfListItem } from '@storefront-ui/react';

export default function ListItemSizes() {
  return (
    <div className="flex flex-col max-w-sm gap-4">
      <SfListItem size="sm">
        <span className="break-words">Label</span>
      </SfListItem>
      <SfListItem>
        <span className="break-words">Label</span>
      </SfListItem>
      <SfListItem size="lg">
        <span className="break-words">Label</span>
      </SfListItem>
    </div>
  );
}

// #endregion source
ListItemSizes.getLayout = ShowcasePageLayout;
