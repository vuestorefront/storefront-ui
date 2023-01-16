import { useState, useEffect } from 'react';
import { VsfSlider, VsfSliderNavigation, VsfSliderScrollbar } from '@storefront-ui/react/components/VsfSlider';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function NavigationPrev({ onClick, hasPrev }: { onClick: () => void; hasPrev: boolean }) {
  return (
    hasPrev && (
      <button type="button" onClick={onClick} className="bg-secondary-400 p-2 rounded-sm text-white">
        prev
      </button>
    )
  );
}
function NavigationNext({ onClick, hasNext }: { onClick: () => void; hasNext: boolean }) {
  return (
    hasNext && (
      <button type="button" onClick={onClick} className="bg-secondary-400 p-2 rounded-sm text-white">
        next
      </button>
    )
  );
}

function Example() {
  const [componentKey, setComponentKey] = useState(0);

  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'navigation',
        propType: 'VsfSliderNavigation',
        options: ['', ...Object.keys(VsfSliderNavigation)],
      },
      {
        type: 'select',
        modelName: 'scrollbar',
        propType: 'VsfSliderScrollbar',
        options: ['', ...Object.keys(VsfSliderScrollbar)],
        description:
          "`auto` hides scrollbar when content don't overflow container, `always` forces container to show scrollbar",
      },
      {
        type: 'boolean',
        modelName: 'scrollSnap',
        propType: 'boolean',
        description: 'Enable native scroll snapping',
      },
      {
        type: 'boolean',
        modelName: 'draggable',
        propType: 'object',
        description: 'Enable mouse drag on container',
      },
      {
        type: 'boolean',
        modelName: 'ExampleCustomNav',
        propType: '---',
        description: 'Only for demonstration purposes',
      },
    ],
    {
      navigation: undefined,
      scrollbar: undefined,
      scrollSnap: false,
      draggable: false,
      ExampleCustomNav: false,
    },
  );

  useEffect(() => {
    // rerender component - 'draggable' prop is not reactive, as it should be declared only once per component
    setComponentKey((val) => val + 1);
  }, [state.get.draggable]);

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfSlider
        key={componentKey}
        navigation={state.get.navigation}
        scrollbar={state.get.scrollbar}
        scrollSnap={state.get.scrollSnap}
        draggable={
          state.get.draggable
            ? {
                sensitivity: 3,
              }
            : undefined
        }
        slotPrevArrow={state.get.ExampleCustomNav ? NavigationPrev : undefined}
        slotNextArrow={state.get.ExampleCustomNav ? NavigationNext : undefined}
      >
        {Array.from(Array(4).keys()).map((item) => (
          <div key={item} data-index={item + 1}>
            <div className="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{item + 1}</div>
          </div>
        ))}
        {Array.from(Array(4).keys()).map((item) => (
          <div key={item} data-index={item + 5}>
            <div className="bg-gray-300 w-[200px] h-[150px] flex justify-center items-center">{item + 5}</div>
          </div>
        ))}
        {Array.from(Array(4).keys()).map((item) => (
          <div key={item} data-index={item + 9}>
            <div className="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{item + 9}</div>
          </div>
        ))}
      </VsfSlider>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
