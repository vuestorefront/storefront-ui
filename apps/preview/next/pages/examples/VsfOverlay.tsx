import VsfOverlay from '@sfui/sfui/frameworks/react/components/VsfOverlay';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import type { VsfOverlayProps } from '@sfui/sfui/frameworks/react/components/VsfOverlay/types';

const Example = () => {
  const { state, controls } = prepareControls<VsfOverlayProps>(
    [
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'visible',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'absolute',
        description:
          'Set `position:absolute` to component (require `position:relative` style attribute in parent component)',
      },
    ],
    {
      absolute: false,
      visible: false,
    },
  );
  function onClickHandler() {
    console.log('VsfOverlay clicked!');
  }
  return (
    <div className="e-page">
      <div className="e-page-component relative">
        <VsfOverlay absolute={state.get.absolute} onClick={onClickHandler} visible={state.get.visible} />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
};

Example.getLayout = ExamplePageLayout;
export default Example;
