import { SfBadge, SfButton, SfIconShoppingCart, SfBadgePlacement, SfBadgeVariant } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'content',
        description: 'Content to display in the badge.',
        propType: 'string | number',
      },
      {
        type: 'text',
        modelName: 'max',
        description: 'Maximum number of counter to show.',
        propType: 'number',
        propDefaultValue: '99',
      },
      {
        type: 'select',
        modelName: 'variant',
        description: 'Badge can have content or be a simple dot.',
        options: Object.values(SfBadgeVariant),
        propType: 'SfBadgeVariant',
        propDefaultValue: 'standard',
      },
      {
        type: 'select',
        modelName: 'placement',
        description: 'Position of the badge relatively to a container.',
        options: Object.values(SfBadgePlacement),
        propType: 'SfBadgePlacement',
        propDefaultValue: 'top-right',
      },
    ],
    {
      content: '1',
      max: 99,
      variant: SfBadgeVariant.standard,
      placement: SfBadgePlacement['top-right'],
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfButton className="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge {...state.get} max={Number(state.get.max)} />
      </SfButton>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
