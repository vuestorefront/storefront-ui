import VsfOverlay from '@sfui/sfui/frameworks/react/components/VsfOverlay';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'visibleModel',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'absoluteModel',
        description:
          'Set `position:absolute` to component (require `position:relative` style attribute in parent component)',
      },
    ],
    {
      absoluteModel: false,
      visibleModel: false,
    },
  );
  function onClickHandler() {
    // eslint-disable-next-line no-console
    console.log('VsfOverlay clicked!');
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
