import { VsfChipThumbnail, VsfChipThumbnailSize } from '@storefront-ui/react/components/VsfChipThumbnail/index';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'color',
        propType: 'string',
        description: 'Sets color',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfChipThumbnailSize),
        propDefaultValue: VsfChipThumbnailSize.base,
        description: 'Component size',
        propType: 'VsfChipThumbnailSize',
      },
    ],
    {
      size: VsfChipThumbnailSize.base,
      color: 'linear-gradient(180deg, #4ADE80 0%, #A78BFA 100%)',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfChipThumbnail {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
