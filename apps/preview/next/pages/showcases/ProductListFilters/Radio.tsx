import { VsfListItemMenu } from '@storefront-ui/react/components/VsfListItemMenu';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const label = 'Lorem ipsum dolor amet';
  const secondaryText = 'Secondary text';
  return (
    <VsfListItemMenu as="label" active slotPrefix="Radio">
      <span>{label}</span>
      <p className="text-xs text-gray-500 break-words">{secondaryText}</p>
    </VsfListItemMenu>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
