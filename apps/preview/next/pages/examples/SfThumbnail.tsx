import { SfThumbnail, SfThumbnailSize } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(SfThumbnailSize),
        propDefaultValue: SfThumbnailSize.base,
        description: 'Component size',
        propType: 'SfThumbnailSize',
      },
    ],
    {
      size: SfThumbnailSize.base,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfThumbnail {...state.get} className="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
