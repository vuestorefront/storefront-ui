import VsfOverlay from '~/output/blocks/VsfOverlay/VsfOverlay.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfOverlayExample() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Absolute',
        type: 'boolean',
        propType: 'boolean',
        modelName: 'absoluteModel',
        description: 'Set `position:absolute` to component',
      },
    ],
    {
      absoluteModel: false,
      show: false,
    },
  );
  function onClickHandler() {
    state.set({ ...state.get, show: !state.get.show });
  }

  return (
    <div className="e-page">
      <div className="e-page-component relative">
        {state.get.show && <VsfOverlay absolute={state.get.absoluteModel} onClick={onClickHandler} />}
        <button
          onClick={onClickHandler}
          className="p-4 font-semibold text-sm bg-primary-600 text-white rounded-none shadow-sm uppercase"
        >
          Toggle overlay
        </button>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
