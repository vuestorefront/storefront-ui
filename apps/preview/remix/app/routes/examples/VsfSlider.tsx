
import VsfSlider from '../../output/blocks/VsfSlider/VsfSlider.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfSliderExample() {
  const { state, controls } = prepareControls([
      ], {
      });
  
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSlider

        >

        </VsfSlider>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
