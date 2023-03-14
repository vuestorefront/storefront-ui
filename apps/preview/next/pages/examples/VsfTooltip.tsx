import { VsfTooltip, VsfTooltipProps, VsfPopoverPlacement } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<VsfTooltipProps>(
    [
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Set label value',
      },
      {
        type: 'select',
        options: Object.keys(VsfPopoverPlacement),
        modelName: 'placement',
        propType: 'VsfPopoverPlacement',
        propDefaultValue: VsfPopoverPlacement.top,
        description: 'Initial position of tooltip in reference to trigger',
      },
      {
        type: 'boolean',
        modelName: 'showArrow',
        propType: 'boolean',
        description: 'Show pointer arrow',
        propDefaultValue: false,
      },
    ],
    {
      label: 'Tooltip text',
      placement: VsfPopoverPlacement.top,
      showArrow: false,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }} componentContainerClassName="flex justify-center items-center">
      <VsfTooltip {...state.get}>
        <span>Hover me!</span>
      </VsfTooltip>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
