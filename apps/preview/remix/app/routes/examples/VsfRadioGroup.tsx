
import VsfRadioGroup from '../../output/blocks/VsfRadioGroup/VsfRadioGroup.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfRadioGroupExample() {
  const { state, controls } = prepareControls([
      ], {
      });
  
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRadioGroup

        >

        </VsfRadioGroup>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
