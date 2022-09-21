import VsfOverlay from '~/output/blocks/VsfOverlay/VsfOverlay.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Visible',
        type: 'boolean',
        propType: "boolean",
        modelName: 'visibleModel',
      },
      {
        title: 'Absolute',
        type: 'boolean',
        propType: 'boolean',
        modelName: 'absoluteModel',
        description: 'Set `position:absolute` to component',
      },
    ],
    {
      absoluteModel: true,
      visibleModel: true,
    },
  );
  function onClickHandler() {
    console.log('VsfOverlay clicked!')
    state.set({ ...state.get, show: false });
  }

  return (
    <div className="e-page">
      <div className="e-page-component relative">
        <VsfOverlay absolute={state.get.absoluteModel} onClick={onClickHandler} visible={state.get.visibleModel} />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
