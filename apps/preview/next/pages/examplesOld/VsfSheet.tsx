import VsfSheet from '../../output/blocks/VsfSheet/VsfSheet';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls([
    {
      title: 'defaultSlot',
      type: 'text',
      modelName: 'defaultSlot',
      description: 'Default slot',
      propDefaultValue: 'false',
      propType: 'string',
    }
  ], {
    defaultSlot: ''
  });

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSheet>
          {state.get.defaultSlot}
        </VsfSheet>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
