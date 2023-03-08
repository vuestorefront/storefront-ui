import { VsfListItemMenu } from '@storefront-ui/react/components/VsfListItemMenu';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col max-w-sm space-y-4 font-body">
      <VsfListItemMenu size="sm">
        <span className="inline-block break-words">Label</span>
      </VsfListItemMenu>
      <VsfListItemMenu size="base">
        <span className="inline-block break-words">Label</span>
      </VsfListItemMenu>
      <VsfListItemMenu size="lg">
        <span className="inline-block break-words">Label</span>
      </VsfListItemMenu>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
