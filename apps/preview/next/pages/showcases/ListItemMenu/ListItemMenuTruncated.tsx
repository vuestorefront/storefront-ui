import { VsfListItemMenu } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfListItemMenu className="max-w-sm">
      <div className="inline-block break-words">Label</div>
      <span className="text-xs text-gray-500 break-words truncate font-body">
        This text is definitely too long to be displayed in one line in this component
      </span>
    </VsfListItemMenu>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
