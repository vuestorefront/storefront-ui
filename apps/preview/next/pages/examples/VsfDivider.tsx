import { VsfDivider } from '@storefront-ui/react/components/VsfDivider';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls([], {});
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfDivider />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
