import { VsfTooltip, VsfTooltipPlacement, VsfTooltipProps } from '@storefront-ui/react/components/VsfTooltip/index';
import { VsfButton } from '@storefront-ui/react/components/VsfButton/index';
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
        type: 'boolean',
        modelName: 'open',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'State of tooltip',
      },
      {
        type: 'select',
        options: Object.keys(VsfTooltipPlacement),
        modelName: 'placement',
        propType: 'VsfTooltipPlacement',
        propDefaultValue: VsfTooltipPlacement.bottom,
        description: 'Initial position of tooltip in reference to trigger',
      },
      {
        type: 'boolean',
        modelName: 'hidePointer',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'Set if pointer should be visible or hidden',
      },
    ],
    {
      label: 'Tooltip text',
      open: undefined,
      placement: VsfTooltipPlacement.bottom,
      hidePointer: undefined,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }} componentContainerClassName="flex justify-center items-center">
      <VsfTooltip
        {...state.get}
        onOpenUpdate={(open) => {
          state.set({ ...state.get, open });
        }}
      >
        <VsfButton>Button</VsfButton>
      </VsfTooltip>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
