import VsfOverlay from '@sfui/sfui/frameworks/react/components/VsfOverlay';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Visible',
        type: 'boolean',
        propType: 'boolean',
        modelName: 'visibleModel',
      },
      {
        title: 'Absolute',
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
};

Example.getLayout = ExamplePageLayout;
export default Example;
