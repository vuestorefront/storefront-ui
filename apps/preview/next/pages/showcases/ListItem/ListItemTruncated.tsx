import { VsfListItem } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfListItem className="max-w-sm">
      <div className="break-words">Label</div>
      <span className="text-xs text-neutral-500 break-words truncate">
        This text is definitely too long to be displayed in one line in this component
      </span>
    </VsfListItem>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
