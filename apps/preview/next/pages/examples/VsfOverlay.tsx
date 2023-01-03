import { VsfOverlay } from '@storefront-ui/react/components/VsfOverlay';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
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
    <ComponentExample controls={{ state, controls }}>
      <VsfOverlay absolute={state.get.absoluteModel} onClick={onClickHandler} visible={state.get.visibleModel} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
