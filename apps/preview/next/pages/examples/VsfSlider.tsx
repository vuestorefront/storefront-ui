import VsfSlider, { NavigationDisplay, VsfSliderItem } from '@sfui/sfui/frameworks/react/components/VsfSlider';
import VsfChipsFilter from '@sfui/sfui/frameworks/react/components/VsfChipsFilter';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'navigation',
        propType: 'string',
        options: ['', 'block', 'floating'],
      },
      {
        type: 'select',
        modelName: 'scrollbar',
        propType: 'string',
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
          {Array.from(Array(4).keys()).map((item) => (
            <VsfSliderItem key={item}>
              <div className="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{item + 1}</div>
            </VsfSliderItem>
          ))}
          {Array.from(Array(4).keys()).map((item) => (
            <VsfSliderItem key={item}>
              <div className="bg-gray-300 w-[300px] h-[150px] flex justify-center items-center">{item + 5}</div>
            </VsfSliderItem>
          ))}
          {Array.from(Array(4).keys()).map((item) => (
            <VsfSliderItem key={item}>
              <div className="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{item + 9}</div>
            </VsfSliderItem>
          ))}
        </VsfSlider>
        <hr className="my-4" />
        <p className="mb-4">Slider with focusable elements</p>
        <VsfSlider navigation={NavigationDisplay.block}>
          {[
            'Lorem',
            'ipsum',
            'dolor',
            'sit',
            'amet',
            'consectetur',
            'adipisicing',
            'elit.',
            'Rem',
            'esse',
            'labore',
            'quae',
            'error',
            'ea',
            'eum',
            'quis',
            'repellat',
            'incidunt',
            'corporis',
            'qui',
          ].map((item) => (
            <VsfSliderItem key={item}>
              <VsfChipsFilter name={item} onChange={() => {}} label={item} />
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
