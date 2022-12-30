import VsfLoaderCircular from '@storefront-ui/react/components/VsfLoaderCircular/VsfLoaderCircular';
import { VsfLoaderSizes } from '@storefront-ui/shared/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propType: 'VsfLoaderSizes',
        options: [...Object.keys(VsfLoaderSizes)],
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
      size: VsfLoaderSizes.lg,
      screenReaderText: 'loading',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfLoaderCircular className="w-10" size={state.get.size} screenReaderText={state.get.screenReaderText} />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
