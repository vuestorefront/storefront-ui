import { useState, useEffect } from 'react';
import VsfSlider, { VsfSliderNavigation, VsfSliderScrollbar } from '@sfui/sfui/frameworks/react/components/VsfSlider';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

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
        modelName: 'showMobileNavigation',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'scrollSnap',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'draggable',
        propType: 'object',
        description: 'Enable mouse drag on container',
      },
    ],
    {
      navigation: undefined,
      scrollbar: undefined,
      showMobileNavigation: false,
      scrollSnap: false,
      draggable: false,
    },
  );

  useEffect(() => {
    // rerender component - 'draggable' prop is not reactive, as it should be declared only once per component
    setComponentKey((val) => val + 1);
  }, [state.get.draggable]);

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSlider
          key={componentKey}
          navigation={state.get.navigation}
          scrollbar={state.get.scrollbar}
          showMobileNavigation={state.get.showMobileNavigation}
          scrollSnap={state.get.scrollSnap}
          draggable={
            state.get.draggable
              ? {
                  sensitivity: 3,
                }
              : undefined
          }
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
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
