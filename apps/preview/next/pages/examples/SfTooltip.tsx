import { SfTooltip, type SfTooltipProps, SfPopoverPlacement, SfPopoverStrategy } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<SfTooltipProps>(
    [
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Set label value',
      },
      {
        type: 'select',
        options: Object.keys(SfPopoverPlacement),
        modelName: 'placement',
        propType: 'SfPopoverPlacement',
        propDefaultValue: SfPopoverPlacement.top,
        description: 'Initial position of tooltip in reference to trigger',
      },
      {
        type: 'select',
        modelName: 'strategy',
        propType: 'SfPopoverStrategy',
        propDefaultValue: SfPopoverStrategy.absolute,
        options: Object.values(SfPopoverStrategy),
        description: 'Tooltip positioning strategy',
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
      placement: SfPopoverPlacement.top,
      strategy: SfPopoverStrategy.absolute,
      showArrow: false,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }} componentContainerClassName="flex justify-center items-center">
      <SfTooltip {...state.get}>
        <span>Hover me!</span>
      </SfTooltip>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
