import { SfScrollable, SfScrollableDirection, SfScrollableButtonsPlacement } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'direction',
        options: Object.keys(SfScrollableDirection),
        propType: 'enum',
        propDefaultValue: SfScrollableDirection.horizontal,
        description: 'Direction of scrollable',
      },
      {
        type: 'select',
        modelName: 'buttonsPlacement',
        options: Object.keys(SfScrollableButtonsPlacement),
        propType: 'SfScrollableButtonsPlacement',
        propDefaultValue: SfScrollableButtonsPlacement.block,
        description: 'Change position of next/previous buttons',
      },
      {
        type: 'boolean',
        modelName: 'drag',
        propType: 'boolean',
        propDefaultValue: false,
        description: 'Enables item dragging on desktop',
      },
      {
        type: 'text',
        modelName: 'totalItems',
        propDefaultValue: '10',
        description: 'Only for demonstration purposes. Total number of items',
      },
      {
        type: 'text',
        modelName: 'buttonPrevAriaLabel',
        propType: 'string',
        propDefaultValue: 'Previous',
        description: 'Sets aria label for the previous button',
      },
      {
        type: 'text',
        modelName: 'buttonNextAriaLabel',
        propType: 'string',
        propDefaultValue: 'Next',
        description: 'Sets aria label for the next button',
      },
    ],
    {
      direction: SfScrollableDirection.horizontal,
      buttonsPlacement: SfScrollableButtonsPlacement.block,
      drag: undefined,
      totalItems: '20',
      buttonPrevAriaLabel: 'Previous element',
      buttonNextAriaLabel: 'Next element',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfScrollable
        drag={state.get.drag}
        direction={state.get.direction}
        buttonsPlacement={state.get.buttonsPlacement}
        buttonPrevAriaLabel={state.get.buttonPrevAriaLabel}
        buttonNextAriaLabel={state.get.buttonNextAriaLabel}
        className="items-center w-full"
      >
        {Array.from({ length: Number(state.get.totalItems || 10) }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-center text-gray-500 border border-dashed w-36 h-36 shrink-0 bg-neutral-100 border-negative-300"
          >
            {i + 1}
          </div>
        ))}
      </SfScrollable>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
