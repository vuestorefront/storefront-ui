import classNames from 'classnames';
import { SfScrollable, SfScrollableDirection, SfScrollableButtonsPlacement } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'children',
        description: 'Only for demonstration purposes. Default slot, replaces example scrollable content',
      },
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
        type: 'text',
        modelName: 'as',
        propType: 'string',
        propDefaultValue: 'div',
        description: 'Tag of scrollable HTML element',
      },
      {
        type: 'boolean',
        modelName: 'drag',
        propType: 'boolean',
        propDefaultValue: false,
        description: 'Enables item dragging on desktop',
      },
      {
        type: 'boolean',
        modelName: 'snap',
        propType: 'boolean',
        propDefaultValue: false,
        description: 'Only for demonstration purposes. Enables item snapping',
      },
      {
        type: 'boolean',
        modelName: 'hideScrollbar',
        propType: 'boolean',
        propDefaultValue: false,
        description: 'Only for demonstration purposes. Hides scrollbar',
      },
      {
        type: 'text',
        modelName: 'totalItems',
        propDefaultValue: '10',
        description: 'Only for demonstration purposes. Total number of items',
      },
    ],
    {
      children: undefined,
      direction: SfScrollableDirection.horizontal,
      buttonsPlacement: SfScrollableButtonsPlacement.block,
      as: undefined,
      drag: undefined,
      snap: undefined,
      hideScrollbar: false,
      totalItems: '20',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfScrollable
        drag={state.get.drag}
        direction={state.get.direction}
        buttonsPlacement={state.get.buttonsPlacement}
        className={classNames('w-full items-center', {
          'snap-x snap-mandatory': state.get.snap,
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']": state.get.hideScrollbar,
        })}
      >
        {state.get.children ||
          Array.from({ length: Number(state.get.totalItems || 10) }, (_, i) => (
            <div
              key={i}
              className={classNames(
                'w-36 h-36 shrink-0 bg-neutral-100 border border-negative-300 border-dashed flex items-center justify-center text-gray-500',
                { 'snap-center': state.get.snap },
              )}
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
