import VsfSlider, { VsfSliderItem } from '@sfui/sfui/frameworks/react/components/VsfSlider';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'navigation',
        propType: 'boolean|string',
        options: ['', 'block', 'floating'],
      },
      {
        type: 'select',
        modelName: 'scrollbar',
        propType: 'boolean|string',
        options: ['', 'auto', 'always'],
      },
    ],
    {
      navigation: undefined,
      scrollbar: undefined,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSlider navigation={state.get.navigation} scrollbar={state.get.scrollbar}>
          {Array.from(Array(2).keys()).map((item) => (
            <VsfSliderItem key={item}>
              <div className="bg-gray-300 w-[80px] h-[148px] flex justify-center items-center">{item + 1}</div>
            </VsfSliderItem>
          ))}
          {Array.from(Array(4).keys()).map((item) => (
            <VsfSliderItem key={item}>
              <div className="bg-blue-300 w-[300px] h-[148px] flex justify-center items-center">{item + 1}</div>
            </VsfSliderItem>
          ))}
          {Array.from(Array(1).keys()).map((item) => (
            <VsfSliderItem key={item}>
              <div className="bg-red-300 w-[200px] h-[148px] flex justify-center items-center">{item + 1}</div>
            </VsfSliderItem>
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
