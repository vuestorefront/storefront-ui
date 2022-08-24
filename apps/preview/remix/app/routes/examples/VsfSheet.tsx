import VsfSheet from '../../output/blocks/VsfSheet/VsfSheet.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfSheetExample() {
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
