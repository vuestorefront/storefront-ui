import { VsfThumbnail, VsfThumbnailSize } from '@storefront-ui/react/components/VsfThumbnail/index';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfThumbnailSize),
        propDefaultValue: VsfThumbnailSize.base,
        description: 'Component size',
        propType: 'VsfThumbnailSize',
      },
    ],
    {
      size: VsfThumbnailSize.base,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfThumbnail {...state.get} className="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
