import VsfLoaderLinear from '@sfui/sfui/frameworks/react/components/VsfLoaderLinear/VsfLoaderLinear';
import { VsfLoaderSizes } from '@sfui/shared/types';
import { VsfLoaderLinearSize } from '@sfui/sfui/frameworks/react/components/VsfLoaderLinear/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propType: 'VsfLoaderSizes',
        options: [...Object.keys(VsfLoaderLinearSize), ...Object.keys(VsfLoaderSizes)],
        propDefaultValue: VsfLoaderLinearSize['2xs'],
        description: 'sets sizes of components',
      },
      {
        type: 'text',
        modelName: 'screenReaderText',
        propType: 'string',
        propDefaultValue: 'loading',
        description: 'sets hidden text available for screen readers',
      },
    ],
    {
      size: VsfLoaderLinearSize['2xs'],
      screenReaderText: 'loading',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfLoaderLinear className="w-10" size={state.get.size} screenReaderText={state.get.screenReaderText} />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
