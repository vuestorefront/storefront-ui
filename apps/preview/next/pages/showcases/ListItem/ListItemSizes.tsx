import { VsfListItem } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
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

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
