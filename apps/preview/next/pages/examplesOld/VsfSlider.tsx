import VsfSlider from '../../output/blocks/VsfSlider/VsfSlider.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls([
    {
      title: 'hasChevrons',
      type: 'boolean',
      modelName: 'hasChevronsModel',
      propDefaultValue: 'true',
      propType: 'boolean',
    },
    {
      title: 'hasScrollbar',
      type: 'boolean',
      modelName: 'hasScrollbarModel',
      propDefaultValue: 'true',
      propType: 'boolean',
    },
  ], {
    hasChevronsModel: true,
    hasScrollbarModel: true,
  });

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSlider
          hasChevrons={state.get.hasChevronsModel}
          hasScrollbar={state.get.hasScrollbarModel}
        >
          {Array.from(Array(10).keys()).map(item =>
            <div
              key={item}
              className="bg-gray-300 w-[148px] h-[148px] flex justify-center items-center"
            >
              {item + 1}
            </div>
          )}
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
